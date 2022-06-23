/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Generator from './src/generator';
import Header from './src/header';
import NumList from './src/numlist';
import {Container, ViewWrap} from './styles/style';

const App = () => {
  const [appName, setAppName] = useState('My First React-Native App');
  const [randomNumber, setRandomNumber] = useState([1]);

  const onAddRandomNum = () => {
    // alert('Added RandomNumber!');
    const randomNumGenerator = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNumber => [...randomNumber, randomNumGenerator]);
  };

  const onDeleteNum = position => {
    // alert('Delete Number');
    // setRandomNumber(
    //   randomNumber.filter((num, idx) => {
    //     return position !== idx;
    //   })
    // );
    setRandomNumber(randomNumber.filter((num, idx) => position !== idx));
  };

  return (
    <Container>
      <Header appName={appName} />
      {/* <Title>First React Native</Title> */}
      {/* <ActivityIndicator style={styles.horizontal} size='large' /> */}
      <ViewWrap>
        <Generator onAddRandomNum={onAddRandomNum} />
        <ScrollView
          style={{width: '100%'}}
          onMomentumScrollBegin={() => alert('scrolled!!')}>
          <NumList randomNumber={randomNumber} onDeleteNum={onDeleteNum} />
        </ScrollView>
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
