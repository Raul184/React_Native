import {StyleSheet} from 'react-native';

export const playPauseStyles = StyleSheet.create({
  touch: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    opacity: 0.6,
    margin: 15,
  }
})