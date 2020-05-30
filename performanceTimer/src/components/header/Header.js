import React from 'react'
import headerStyles  from './header.styles.js'
import { View , Text } from 'react-native';
//comps
import Greetings from './../greetings/greetings';

const Header = () => <View style={headerStyles.header}>
<Text style={headerStyles.h1}>
  <Greetings />
</Text>
</View>


export default Header;