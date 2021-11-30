import {StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../../Utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  artworkMainContainer: {
    height: HP('43'),
    marginTop: WP('5'),
    backgroundColor: colors.white,
  },
});
export default styles;
