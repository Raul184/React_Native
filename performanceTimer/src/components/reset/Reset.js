import React from 'react'
import resetStyles from './reset.styles'
import { View , Text , TouchableOpacity } from 'react-native'

const Reset = ({ reset }) => {
  return (
    <View style={resetStyles.reset}>
      <TouchableOpacity onPress={() => reset()}>
        <Text style={resetStyles.btn}>Reset</Text>
      </TouchableOpacity> 
    </View>
  )
}


export default Reset;