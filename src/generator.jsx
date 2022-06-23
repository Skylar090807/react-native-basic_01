import React from 'react';
import {Button} from 'react-native';
import {ButtonWrap} from '../styles/style';

const Generator = ({onAddRandomNum}) => {
  return (
    <ButtonWrap>
      <Button title='Add Random Number' onPress={() => onAddRandomNum()} />
    </ButtonWrap>
  );
};

export default Generator;
