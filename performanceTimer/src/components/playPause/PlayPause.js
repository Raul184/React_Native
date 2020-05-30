import React from 'react'
import { View , TouchableOpacity , Image } from 'react-native'
import {playPauseStyles} from './playPause.styles';


const PlayPause = ({ set , toggle }) => {
  return <View style={playPauseStyles.touch}>
    <TouchableOpacity onPress={() => toggle()}>
      { set ? 
        <Image source={require(`./play.webp`)} style={playPauseStyles.icon}/>
        :
        <Image source={require(`./pause.webp`)} style={playPauseStyles.icon} />  
      }
    </TouchableOpacity>
  </View>
}


export default PlayPause;
