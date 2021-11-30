import React from 'react';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  // Icon,
} from 'react-native';
import {HP, WP, colors, size} from '../../Utilities';

const ArtistHeader = ({title, position, item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerNameContainerStyle}>
        <Text style={styles.headerNameTextStyle}>{title}</Text>
        <View style={styles.locationIconContainer}>
          <Icon
            name="map-marker"
            type="material-community"
            color={colors.white}
          />
          <Text style={styles.locationTextStyle}>{position}</Text>
        </View>
      </View>
      <View style={styles.headerImageMainContaier}>
        <TouchableOpacity>
          <View style={styles.headerImageContStyle}>
            <Image source={item.artist_photo} style={styles.headerImageStyle} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArtistHeader;

const styles = StyleSheet.create({
  mainContainer: {
    height: HP('10'),
    width: WP('95'),
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.s6,
    borderBottomLeftRadius: WP('8'),
    borderBottomRightRadius: WP('8'),
  },
  headerNameContainerStyle: {
    height: HP('10'),
    width: WP('70'),
    paddingHorizontal: WP('5'),
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: WP('8'),
  },
  headerNameTextStyle: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
    color: colors.white,
  },
  locationIconContainer: {
    height: HP('3'),
    width: WP('70'),
    marginTop: WP('1'),
    marginLeft: WP('-1'),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTextStyle: {
    fontSize: size.large,
    color: colors.white,
  },
  headerImageMainContaier: {
    height: HP('10'),
    width: WP('25'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: WP('8'),
  },
  headerImageContStyle: {
    height: HP('8'),
    width: WP('16'),
    borderRadius: WP('100'),
    backgroundColor: colors.white,
    borderWidth: WP('1'),
    overflow: 'hidden',
    borderColor: colors.white,
    resizeMode: 'contain',
  },
  headerImageStyle: {height: HP('8'), width: WP('15'), resizeMode: 'cover'},
});
