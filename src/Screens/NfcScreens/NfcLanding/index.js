import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import ArtistHeader from '../../../Components/NfcComponents/HeaderComponent';
import ArtWork from '../../../Components/NfcComponents/ArtWork';
import styles from './Styles';
import {jsonData} from '../../../Services/data';
import Carousel from 'react-native-snap-carousel';

const Artists = ({navigation}) => {
  const carousel = useRef();

  const renderItem = ({item, index}) => {
    return (
      <ArtWork
        key={index}
        position={item.location}
        item={item}
        onPress={() =>
          navigation.navigate('CustomTransceive', {
            nfcTech: 'NfcA',
          })
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {jsonData.map((artist, key) => {
          return (
            <View key={key}>
              <ArtistHeader
                title={artist.artist_name}
                position={artist.artist_location}
                item={artist}
              />
              <View style={styles.artworkMainContainer}>
                <Carousel
                  layout={'default'}
                  loop={true}
                  activeAnimationType={'spring'}
                  data={artist.artworks}
                  sliderWidth={370}
                  itemWidth={280}
                  renderItem={renderItem}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Artists;
