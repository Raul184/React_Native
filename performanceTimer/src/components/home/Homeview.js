import React, {useState} from 'react';
import {homeStyles} from './homeViewStyles';
import { View, ImageBackground } from 'react-native';
// Comps.
import Header from '../header/Header'; 
import Timer from '../timer/SetTimer';
import Reset from '../reset/Reset';
import PlayPause from '../playPause/PlayPause';
import GetFecha from '../date/date';

function Homeview() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTime(0);
    setIsActive(false);
  }

  return (
    <View style={homeStyles.container}>
      <ImageBackground
        source={require('./lion.webp')}
        resizeMode="cover"
        style={homeStyles.imgBackg}
      >
        <Header />
        <Timer isActive={isActive} time={time} setTime={setTime} />
        { 
          time > 0 &&  <Reset reset={reset} />
        }
        {isActive ?  
          <PlayPause set={false} toggle={toggle} />
          :
          <PlayPause set={true} toggle={toggle} />
        }
        <GetFecha />
      </ImageBackground>
    </View>
  );
}

export default Homeview;
