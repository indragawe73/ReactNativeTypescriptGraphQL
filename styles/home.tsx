// import { Platform, Dimensions, StyleSheet } from 'react-native';
// const { height, width } = Dimensions.get('window')
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapRowLeft: {
    width: '30%',
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#F0F4FE',
    paddingHorizontal: 15,
    borderRightWidth: .2,
    borderTopWidth: .2,
    borderColor: '#9CA4AC'
  },
  textRow: {
    color: '#9CA4AC', 
    fontSize: 12, 
    fontWeight: "500"
  },
  textRowRed: {
    color: '#FF2C2C', 
    fontSize: 12, 
    fontWeight: "500"
  },


});