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

const Header = ({appName}) => {
  return (
    <TochableWrap onPress={() => alert('Toched Title!!')}>
      <Container>
        <Title>{appName}</Title>
      </Container>
    </TochableWrap>
  );
};

export default Header;
