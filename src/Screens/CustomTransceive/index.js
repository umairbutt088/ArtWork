import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-paper';
import CustomTransceiveModal from '../../Components/CustomTransceiveModal';
import CommandItem from '../../Components/CustomCommandItem';
import NfcProxy from '../../NfcProxy';
import ScreenHeader from '../../Components/ScreenHeader';
import {NfcTech} from 'react-native-nfc-manager';
import {HP, WP, colors, size} from '../../Utilities';

function CustomTransceiveScreen(props) {
  const {params} = props.route;
  console.log('Params=====>>>>>', params);
  const nfcTech = params.savedRecord?.payload.tech || params.nfcTech;
  const [showCommandModal, setShowCommandModal] = React.useState(false);
  const [currEditIdx, setCurrEditIdx] = React.useState(null);
  const [commands, setCommands] = React.useState(
    // params.savedRecord?.payload.value ||
    [
      {payload: [0xcd, 0x0d], type: 'command'},
      {payload: [0xcd, 0], type: 'command'}, //type
      {payload: 10, type: 'delay'},
      {payload: [0xcd, 0x01], type: 'command'},
      {payload: 10, type: 'delay'},
      {payload: [0xcd, 0x02], type: 'command'},
      {payload: 100, type: 'delay'},
      {payload: [0xcd, 0x03], type: 'command'},
    ],
  );
  const [responses, setResponses] = React.useState([]);

  React.useEffect(() => {
    if (!showCommandModal) {
      setCurrEditIdx(null);
    }
  }, [showCommandModal]);

  function addCommand(cmd) {
    const nextCommands = [...commands];
    nextCommands[currEditIdx] = cmd;
    setCommands(nextCommands);
    setResponses([]);
  }

  function editCommand(cmd) {
    if (currEditIdx === null) {
      return;
    }
    const nextCommands = [...commands];
    nextCommands[currEditIdx] = cmd;
    setCommands(nextCommands);
    setResponses([]);
  }

  async function executeCommands() {
    let result = [];

    if (nfcTech === NfcTech.NfcA) {
      result = await NfcProxy.customTransceiveNfcA(commands);
    } else if (nfcTech === NfcTech.IsoDep) {
      result = await NfcProxy.customTransceiveIsoDep(commands);
    }

    const [success, resps] = result;

    if (!success) {
      Alert.alert('Commands Not Finished', '', [
        {text: 'OK', onPress: () => 0},
      ]);
    }

    setResponses(resps);
  }

  function getRecordPayload() {
    return {
      tech: nfcTech,
      value: commands,
    };
  }

  return (
    <>
      <ScreenHeader
        title="CUSTOM TRANSCEIVE"
        navigation={props.navigation}
        // getRecordPayload={getRecordPayload}
        // savedRecord={params.savedRecord}
        // savedRecordIdx={params.savedRecordIdx}
      />
      <View style={styles.wrapper}>
        <Text style={{padding: 10}}>Tech / {nfcTech}</Text>
        <ScrollView style={[styles.wrapper, {padding: 10}]}>
          {commands.map((cmd, idx) => (
            <CommandItem
              cmd={cmd}
              resp={responses[idx]}
              key={idx}
              onDelete={() => deleteCommand(idx)}
              onEdit={() => {
                setShowCommandModal(true);
                setCurrEditIdx(idx);
              }}
            />
          ))}
        </ScrollView>

        <View style={styles.actionBar}>
          <Button
            // mode="contained"
            labelStyle={{color: colors.white}}
            style={{marginBottom: 8, backgroundColor: colors.s6}}
            onPress={() => setShowCommandModal(true)}>
            ADD
          </Button>
          <Button
            // mode="outlined"
            labelStyle={{color: colors.white}}
            disabled={commands.length === 0}
            style={{backgroundColor: colors.s6}}
            onPress={executeCommands}>
            EXECUTE
          </Button>
        </View>
        <SafeAreaView />
      </View>

      <CustomTransceiveModal
        isEditing={currEditIdx !== null}
        visible={showCommandModal}
        setVisible={setShowCommandModal}
        editCommand={currEditIdx === null ? addCommand : editCommand}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  actionBar: {
    padding: 10,
  },
});

export default CustomTransceiveScreen;
