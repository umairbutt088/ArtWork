import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  // Icon,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {appImages, colors, HP, size, WP} from '../../Utilities';

const ArtWork = ({position, item, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.artWorkMainContainer}>
        <ImageBackground
          source={item.image}
          resizeMode="contain"
          style={styles.imageBackgroundStyle}></ImageBackground>
        <View
          style={{
            height: HP('31.7'),
            position: 'absolute',
            justifyContent: 'space-between',
          }}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateTextStyle}>{item.date}</Text>
            <Text style={styles.dateTextStyle}>{item.month}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Icon
              name="map-marker"
              type="material-community"
              color={colors.white}
            />
            <Text style={styles.locationTextStyle}>{position}</Text>
          </View>
        </View>
      </View>
      <View style={styles.joinedMainContainer}>
        <Text style={styles.joinedTextStyle}>{`${item.joined} joined`}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.smallView}>
            <Image
              source={appImages.babyImage2}
              style={styles.smallViewImgStyle}
            />
          </View>
          <View style={styles.smallView2}>
            <Image
              source={appImages.profileImage}
              style={styles.smallViewImgStyle}
            />
          </View>
          <View style={styles.smallView3}>
            <Image
              source={appImages.babyImage2}
              style={styles.smallViewImgStyle}
            />
          </View>
          <View style={styles.smallView4}>
            <Image
              source={appImages.transparentImage_1}
              style={styles.smallViewImgStyle}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArtWork;

const styles = StyleSheet.create({
  mainContainer: {
    height: HP('40'),
    width: WP('70'),
    backgroundColor: colors.s6,
    marginTop: WP('3'),
    margin: WP('3'),
    borderTopLeftRadius: WP('8'),
    borderTopRightRadius: WP('8'),
    borderBottomLeftRadius: WP('1'),
    borderBottomRightRadius: WP('1'),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  artWorkMainContainer: {
    height: HP('32'),
    width: WP('70'),
    backgroundColor: 'transparent',
    borderTopLeftRadius: WP('8'),
    borderTopRightRadius: WP('8'),
  },
  imageBackgroundStyle: {
    height: HP('32'),
    backgroundColor: 'transparent',
    marginHorizontal: 15,
  },
  dateContainer: {
    paddingVertical: WP('2'),
    // width: WP('12'),
    backgroundColor: 'transparent',
    marginLeft: WP('3.5'),
    marginTop: HP('2'),
    justifyContent: 'center',
  },
  dateTextStyle: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
    color: colors.white,
  },
  locationContainer: {
    height: HP('3'),
    width: WP('70'),
    backgroundColor: 'rgba(0,0,0,0.05)',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: HP('18'),
    paddingHorizontal: WP('2'),
  },
  locationTextStyle: {
    fontSize: size.large,
    color: colors.white,
  },
  joinedMainContainer: {
    height: HP('8'),
    width: WP('70'),
    paddingTop: WP('5'),
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: WP('5'),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    borderBottomLeftRadius: WP('1'),
    borderBottomRightRadius: WP('1'),
  },
  joinedTextStyle: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
    color: colors.drakBlack,
  },
  smallView: {
    height: HP('3.5'),
    width: WP('7'),
    backgroundColor: 'transparent',
    borderRadius: WP('100'),
    marginRight: WP('-2'),
    zIndex: WP('10'),
  },
  smallView2: {
    height: HP('3.5'),
    width: WP('7'),
    backgroundColor: 'transparent',
    borderRadius: WP('100'),
    marginRight: WP('-2'),
    zIndex: WP('8'),
  },
  smallView3: {
    height: HP('3.5'),
    width: WP('7'),
    backgroundColor: 'transparent',
    borderRadius: WP('100'),
    marginRight: WP('-2'),
    zIndex: WP('6'),
  },
  smallView4: {
    height: HP('3.5'),
    width: WP('7'),
    backgroundColor: 'transparent',
    borderRadius: WP('100'),
    marginRight: WP('-2'),
  },
  smallViewImgStyle: {
    height: HP('3.5'),
    width: WP('7'),
    resizeMode: 'cover',
    borderRadius: WP('100'),
  },
});
