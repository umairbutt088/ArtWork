import {StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../../Utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  artworkMainContainer: {
    flexDirection: 'row',
    height: HP('45'),
    marginTop: WP('5'),
    paddingHorizontal: 5,
  },
});
export default styles;
