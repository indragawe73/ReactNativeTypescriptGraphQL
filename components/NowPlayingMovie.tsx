import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';

import styles from './../styles/nowPlayingMovie';

function NowPlayingMovie(props: any) {
  const { pokemons, navigation } = props

  return (
      <View 
        style={styles.playingMovie}>

          {pokemons ?
            pokemons.map((pokemon, index) => {
              return ( 

              <TouchableOpacity 
                onPress={() =>
                  navigation.push('Detail', {
                    itemId: pokemon.id,
                  })
                }>
                
                <View key={pokemon.id} style={styles.wrapMovie}>
                  <Image source={{uri: pokemon.image}}
                    style={styles.imageSize}
                    resizeMode="contain"
                  />
                  <Text style={styles.playingMovieTitle}>{ pokemon.name }</Text>
                </View>

              </TouchableOpacity>
              )
            })
          :null}

      </View>
  )
}

export default NowPlayingMovie;

