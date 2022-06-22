/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Container, Title, Paragraph, ViewWrap} from './styles/style';

const App = () => {
  return (
    <Container>
      <Title>First React Native</Title>
      <ActivityIndicator style={styles.horizontal} size='large' />
      <ViewWrap>
        <Paragraph>paragraph1</Paragraph>
      </ViewWrap>
      <ViewWrap>
        <Paragraph>paragraph2</Paragraph>
      </ViewWrap>
      <ViewWrap>
        <Paragraph>paragraph3</Paragraph>
      </ViewWrap>
    </Container>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    padding: 20
  }
});

export default App;
