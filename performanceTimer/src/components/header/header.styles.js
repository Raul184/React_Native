import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 50,
    fontFamily: 'cursive',
    color: 'rgb( 255, 255, 255 )',
    opacity: 0.6,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -4, height: 4},
    textShadowRadius: 8,
  }
})

export default headerStyles;