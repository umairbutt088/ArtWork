import * as React from 'react';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SaveRecordModal from './SaveRecordModal';
import * as AppContext from '../AppContext';
import {Alert} from 'react-native';
import {showToast} from './Toast';

function ScreenHeader(props) {
  const {navigation, title, getRecordPayload, savedRecord, savedRecordIdx} =
    props;
  const [saveModalVisible, setSaveModalVisible] = React.useState(false);

  async function onPersistRecord(name, updateExist = false) {
    const payload = getRecordPayload();
    const nextList = AppContext.Actions.getStorage();
    if (updateExist && typeof savedRecordIdx === 'number') {
      nextList[savedRecordIdx] = {
        name,
        payload,
      };
    } else {
      nextList.push({
        name,
        payload,
      });
    }
    await AppContext.Actions.setStorage(nextList);
    setSaveModalVisible(false);
  }

  return (
    <>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={title} />
        {!!getRecordPayload && (
          <Appbar.Action
            icon={() => <Icon name="save" size={22} />}
            onPress={() => {
              if (savedRecord && typeof savedRecordIdx === 'number') {
                Alert.alert(
                  'Confirm',
                  'Do you want to override current record?',
                  [
                    {
                      text: 'YES',
                      onPress: () => {
                        onPersistRecord(savedRecord.name, true);
                        showToast({
                          message: `"${savedRecord.name}" has been updated successfully!`,
                          type: 'success',
                        });
                      },
                    },
                    {text: 'No'},
                  ],
                );
              } else {
                setSaveModalVisible(true);
              }
            }}
          />
        )}
      </Appbar.Header>

      <SaveRecordModal
        visible={saveModalVisible}
        onClose={() => setSaveModalVisible(false)}
        onPersistRecord={onPersistRecord}
      />
    </>
  );
}

export default ScreenHeader;
