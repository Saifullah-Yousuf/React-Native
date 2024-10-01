import React from 'react';
import { View, Text } from 'react-native';
import Cards from './Components/Cards';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>Damay Website</Text>
      <Cards />
    </View>
  );
};

export default App;
