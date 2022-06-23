import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {TextInputWrap} from '../styles/style';

const Input = ({}) => {
  const [text, setText] = useState('TextInput');

  const onChangeTextHandle = () => {
    setText();
  };

  return (
    <TextInputWrap
      value={text}
      onChangeText={onChangeTextHandle}
      multiline={true}
      maxLength={50}
      autoCapitalize={'none'}
      editable={true}
    />
  );
};

export default Input;
