import * as React from 'react';
import { ScrollView, TouchableOpacity, RefreshControl } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { useState } from 'react'

import Header from './../components/Header';
import NowPlayingMovie from './../components/NowPlayingMovie';
import styles from './../styles/home';

import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './../graphql/getPokemons';

function HomeScree({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
 
  const { 
    data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { 
      first: 19 
    },
  });

  function shootAll() {}
  
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={(()=>shootAll())}
          />
        }
      >            
        <NowPlayingMovie pokemons={pokemons} navigation={navigation} />

      </ScrollView>
    </View>
  );
}

export default HomeScree;
