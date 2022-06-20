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

const App = () => {
  const [sampleText, setSampleText] = useState('First React Native App');
  const [sampleBoolean, setSampleBoolean] = useState(false);
  const [sampleNum, setSampleNum] = useState(1);

  const inputText = () => {
    sampleBoolean ? (
      <Text>SampleBoolean is True</Text>
    ) : (
      <Text>SampleBoolean is False</Text>
    );
  };

  const changeState = () => {
    // if (!sampleBoolean) {
    //   setSampleText('Text Changed');
    // } else {
    //   setSampleText('First React Native App');
    // }
    setSampleText('Text Changed');
  };

  const onAdd = () => {
    setSampleNum(sampleNum + 1);
  };

  return (
    <View style={styles.background}>
      <Text onPress={changeState}>{sampleText}</Text>
      <Text onPress={onAdd}>{sampleNum}</Text>
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
