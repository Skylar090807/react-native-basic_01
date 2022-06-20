/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
// import type {Node} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropsChild from './src/propsChild';

const App = () => {
  const [sampleBoolean, setSampleBoolean] = useState(false);
  const [addText, setAddText] = useState('Parents Text');

  const inputText = () => {
    sampleBoolean ? (
      <Text>SampleBoolean is True</Text>
    ) : (
      <Text>SampleBoolean is False</Text>
    );
  };

  return (
    <View style={styles.background}>
      <PropsChild addText={addText} setAddText={setAddText} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});

export default App;
