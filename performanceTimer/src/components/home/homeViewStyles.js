import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1
  },
  imgBackg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  time: {
    flex: 1,
    width: 120,
    textAlign: 'center',
    fontFamily: 'cursive',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'rgb( 255, 255, 255 )',
    opacity: 0.6,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
});
