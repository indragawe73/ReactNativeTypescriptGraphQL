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
    width: window.window.width,
    height: 400,
    padding: 10, 
    flexDirection: 'column',
    marginBottom: 20,
    borderColor: '#e9e9e9',
    borderBottomWidth: .2,
  },
  imageSize: {
    width: '100%', 
    height: window.window.width,
  },
  wrapClass: {
    width: window.window.width - 40,
    height: 30,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleClass: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  playingMovieTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginVertical: 10,
    width: window.window.width - 40,
  },
  detailList: {
    fontSize: 18,
    fontWeight: '500',
    color: 'teal'
  },
  detailListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal'
  },
  wrapList: {flexDirection: 'row', width: window.window.width - 40},


});