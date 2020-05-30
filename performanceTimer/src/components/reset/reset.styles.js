import { StyleSheet } from "react-native";

const resetStyles = StyleSheet.create({
  reset: {
    width: '80%',
    flexDirection: 'row' ,
    justifyContent: 'flex-end'
  },
  btn: {
    fontFamily: 'cursive',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgb( 255, 255, 255 )',
    opacity: 0.6,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4, 
  }
})


export default resetStyles;