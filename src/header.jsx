import React from 'react';
import {Container, Title, TochableWrap} from '../styles/style';

const Header = ({appName}) => {
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

export default Header;
