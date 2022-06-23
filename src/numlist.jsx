import React from 'react';
import {TextWrap, NumListText} from '../styles/style';

const NumList = ({randomNumber, onDeleteNum}) => {
  return randomNumber.map((item, idx) => (
    <TextWrap key={idx} onPress={() => onDeleteNum(idx)}>
      <NumListText>{item}</NumListText>
    </TextWrap>
  ));
};

export default NumList;
