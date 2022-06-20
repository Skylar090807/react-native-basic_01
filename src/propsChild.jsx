/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PropsChild = ({addText, setAddText}) => {
  const [sampleText, setSampleText] = useState('First React Native App');
  const [sampleNumber, setSampleNumber] = useState(1);

  const changeState = () => {
    // if (!sampleBoolean) {
    //   setSampleText('Text Changed');
    // } else {
    //   setSampleText('First React Native App');
    // }
    setSampleText('Text Changed');
  };

  const onAdd = () => {
    setSampleNumber(sampleNumber + 1);
  };

  const changeText = () => {
    setAddText('Changed Parents Text');
  };
  return (
    <View style={styles.background}>
      <Text onPress={changeState} style={styles.text}>
        {sampleText}
      </Text>
      <Text onPress={onAdd} style={styles.number}>
        {sampleNumber}
      </Text>
      <Text onPress={changeText}>{addText}</Text>
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
  },
  text: {
    fontSize: 24
  },
  number: {
    marginTop: 25,
    fontSize: 24
  }
});

export default PropsChild;
