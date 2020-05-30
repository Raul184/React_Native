import React, {useEffect} from 'react';
import timerStyles from './timer.styles.js'
import {Text , View } from 'react-native';
import moment from 'moment';

const Timer = ({isActive, time, setTime}) => {
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(s => s + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, setTime, time]);

  return (
    <View style={timerStyles.timer}>
      <Text style={timerStyles.timerText}>
        { moment.utc(time).format('HH:mm:ss') }
      </Text>
    </View>
  )
};

export default Timer;

