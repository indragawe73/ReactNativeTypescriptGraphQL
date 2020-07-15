import { StyleSheet, Platform } from 'react-native';
import window from './../constants/Layout';

export default StyleSheet.create({

  wrapHeader: {
    paddingTop: Platform.OS === 'ios' ? 0 : 30, 
    width: window.window.width, 
    height: Platform.OS === 'ios' ? 66 : 96, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    marginBottom: 0, 
    elevation: 1,
    shadowColor: '#4C7DFE',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    width: 50, 
    height: 40, 
    position: 'absolute', 
    left: 10, 
    top: 30, 
    zIndex: 3, 
    elevation: 1
  },


});