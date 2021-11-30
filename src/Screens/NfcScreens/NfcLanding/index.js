import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
// import ArtistHeader from '../../../Components/ArtistHeader';
import ArtistHeader from '../../../Components/NfcComponents/HeaderComponent';
// import ArtWork from '../../../Components/ArtWork';
import ArtWork from '../../../Components/NfcComponents/ArtWork';
import {WP} from '../../../Utilities';
import styles from './Styles';
import {jsonData} from '../../../Services/data';

const Artists = ({navigation}) => {
  const renderItem = () => {};
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
              <ScrollView
                horizontal={true}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  width: WP('77') * artist.artworks.length,
                }}>
                <View style={styles.artworkMainContainer}>
                  {artist.artworks.map((artwork, index) => {
                    return (
                      <ArtWork
                        key={index}
                        position={artwork.location}
                        item={artwork}
                        onPress={() =>
                          navigation.navigate('CustomTransceive', {
                            nfcTech: 'NfcA',
                          })
                        }
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Artists;
