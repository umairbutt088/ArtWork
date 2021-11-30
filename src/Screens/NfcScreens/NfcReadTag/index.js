import React, {useEffect} from 'react';
import styles from './styles';
import {View} from 'react-native';
import CustomButton from '../../../Components/NfcComponents/CustomButton';
// import NfcReader from '../../../Components/nfcReader';
import {WP, colors} from '../../../Utilities';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
// import NfcProxy from '../NfcProxy/NfcProxy';
import NfcProxy from '../../../NfcProxy';
// import ReadNdef from '../../../Components/nfcReader2';

const ReadTags = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <NfcReader /> */}
      {/* <ReadNdef /> */}
      <CustomButton
        Title={'Read Tag'}
        containerStyles={{backgroundColor: colors.s6}}
        onPress={async () => {
          const tag = await NfcProxy.readTag();
          console.log('>>>>>>Tag', tag);
          if (tag) {
            navigation.navigate('TagDetail', {tag});
          }
          console.log('tag', tag);
        }}
      />
      <CustomButton
        Title={'Write Tag'}
        containerStyles={{backgroundColor: colors.s6, marginTop: WP('5')}}
        // onPress={readTag}
      />
    </View>
  );
};

export default ReadTags;
