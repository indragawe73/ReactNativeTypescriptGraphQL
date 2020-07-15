import { StyleSheet } from 'react-native';
import window from './../constants/Layout';

export default StyleSheet.create({

  playingMovie: {
    padding: 10, 
    width: window.window.width,  
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    marginBottom: 10,
  },
  wrapMovie: {
    width: window.window.width - 20, 
    height: 200,
    padding: 10, 
    flexDirection: 'column',
    marginBottom: 20,
    borderRadius: 20,
    borderColor: '#999',
    borderWidth: 1,
  },
  imageSize: {
    width: '100%', 
    height: 140,
    padding: 10,
  },
  playingMovieTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },



});