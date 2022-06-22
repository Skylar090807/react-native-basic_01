/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Title, TochableWrap} from '../styles/style';

const Generator = ({appName}) => {
  return (
    <TochableWrap //
      // onPress={() => alert('Toched Title!!')}
      // onLongPress={() => alert('Long Toched Title!!')}
      // onPressIn={() => alert('On Press In Title!!')}
      onPressOut={() => alert('On Press Out Title!!')}>
      <Container>
        <Title>{appName}</Title>
      </Container>
    </TochableWrap>
  );
};

export default Generator;
