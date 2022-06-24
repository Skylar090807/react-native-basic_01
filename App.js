/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Button, Text, Alert} from 'react-native';
import Generator from './src/generator';
import Header from './src/header';
import Input from './src/intput';
import NumList from './src/numlist';
import {
  Container,
  ViewWrap,
  TextInputWrap,
  AddedText,
  AddedView
} from './styles/style';

const App = () => {
  const [appName, setAppName] = useState('My First React-Native App');
  const [randomNumber, setRandomNumber] = useState([1]);
  const [text, setText] = useState('');
  const [alphabet, setAlphabet] = useState([
    'apple',
    'banana',
    'coconut',
    'diamond'
  ]);

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

  const onChangeTextHandle = state => {
    // alert(state)
    setText(state);
  };

  const onAddTextInput = () => {
    // text 빈 문자열로 초기화 한다. setAlphabet에 기존 state 복사 후 text추가.
    setAlphabet([...alphabet, text]);
    setText('');
  };

  const onDeleteText = state => {
    setAlphabet(alphabet.filter((text, idx) => state !== idx));
  };

  return (
    <Container>
      <Header appName={appName} />

      {/* <ActivityIndicator style={styles.horizontal} size='large' /> */}
      {/* <ViewWrap>
        <Generator onAddRandomNum={onAddRandomNum} />
        <ScrollView
          style={{width: '100%'}}
          // onMomentumScrollBegin={() => alert('scroll start!!')}
          // onMomentumScrollEnd={() => alert('scroll end!!')}
          // onScroll={() => alert('scrolling!!')}
          // onContentSizeChange={(width, height) => alert(height)}
          bounces={true}>
          <NumList randomNumber={randomNumber} onDeleteNum={onDeleteNum} />
        </ScrollView>
      </ViewWrap>
      <ViewWrap>
        <Input />
      </ViewWrap> */}
      <ViewWrap>
        <TextInputWrap
          value={text}
          onChangeText={onChangeTextHandle}
          multiline={true}
          maxLength={50}
          autoCapitalize={'none'}
          editable={true}
          placeholder='Add Text'
        />
        <Button onPress={onAddTextInput} title='Add Text' />
        <ScrollView>
          {alphabet.map((item, idx) => (
            <AddedView key={idx} onPress={() => onDeleteText(idx)}>
              <AddedText>{item}</AddedText>
            </AddedView>
          ))}
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
