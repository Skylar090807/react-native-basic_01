import React from 'react';
import {TextWrap, NumListText} from '../styles/style';

const NumList = ({randomNumber}) => {
  return randomNumber.map((item, idx) => (
    <TextWrap key={idx}>
      <NumListText>{item}</NumListText>
    </TextWrap>
  ));
};

export default NumList;
