import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';

import styles from './../styles/detailPlayingMovie';

function DetailPlayingMovie(props: any) {
  const { pokemon } = props

  return (
  	<View>
      <View 
        style={styles.playingMovie}>
                
          <View style={styles.wrapMovie}>
            <Image source={{uri: pokemon.image}}
              style={styles.imageSize}
              resizeMode="contain"
            />
          </View>
          <View  style={styles.wrapClass}>
            <Text style={styles.titleClass}>{ pokemon.classification }</Text>
          </View>
          <Text style={styles.playingMovieTitle}>{ pokemon.name }</Text>
          <View  style={styles.wrapList}>
            <Text style={styles.detailListTitle}> maxCP:</Text>
            <Text style={styles.detailList}> { pokemon.maxCP }</Text>
          </View>
          <View  style={styles.wrapList}>
            <Text style={styles.detailListTitle}> maxHP:</Text>
            <Text style={styles.detailList}> { pokemon.maxHP }</Text>
          </View>
      </View>
  	</View>
  )
}

export default DetailPlayingMovie;
