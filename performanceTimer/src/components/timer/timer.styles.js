import { StyleSheet } from "react-native";

const timerStyles = StyleSheet.create({
  timer: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 50,
    fontFamily: 'cursive',
    color: 'rgb( 255, 255, 255 )',
    opacity: 0.6,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -4, height: 4},
    textShadowRadius: 8,
  }
})

export default timerStyles;