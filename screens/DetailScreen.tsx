import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Header from './../components/Header';
import DetailPlayingMovie from './../components/DetailPlayingMovie';
import styles from './../styles/detail';

import { useQuery } from '@apollo/client';
import { GET_DETAIL_POKEMON } from './../graphql/getPokemons';

export default function DetailScreen({ route, navigation }) {
  const { itemId } = route.params;

  const { 
    data: { pokemon = [] } = {} } = useQuery(GET_DETAIL_POKEMON, {
    variables: { 
      id: itemId 
    },
  });

  return (
    <React.Fragment>
      <Header backButton={true} navigation={navigation}/>
      <View style={styles.container}>
        
        <DetailPlayingMovie pokemon={pokemon}/>

      </View>
    </React.Fragment>
  );
}
