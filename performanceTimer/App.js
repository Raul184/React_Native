import React from 'react';
import {SafeAreaView} from 'react-native';
// Pages
import Homeview from './src/components/home/Homeview';

const App: () => React$Node = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <Homeview />
    </SafeAreaView>
  );
};

export default App;
