import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import {  TextProps } from './Themed';
import styles from './../styles/header';

function Header(props: any) {
  const { backButton, navigation } = props


  return (
  	<View>
      {backButton ?
        
        <TouchableOpacity 
	        onPress={() => navigation.goBack()}
          style={styles.backButton}>

            <AntDesign name="back" size={30} color="black" style={{color: 'black', paddingVertical: 2, paddingHorizontal: 10}} />
        
        </TouchableOpacity>
        
      : null}
      <View 
        style={styles.wrapHeader}>
        <Image source={require('./../assets/images/nav_Logo.png')}
          style={{width: 170 }}
          resizeMode="contain"
        />
      </View>
  	
  	</View>
  )

}

export default Header;

