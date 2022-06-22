import styled from 'styled-components/native';

// App.js
export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ViewWrap = styled.View`
  flex: 1;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-top: 10px;
  width: 100%;
`;

export const Title = styled.Text`
  margin-top: 20;
  font-size: 33;
  font-weight: bold;
  background-color: lightpink;
  padding: 20px;
  border-radius: 30px;
  color: #fff;
`;

export const Paragraph = styled.Text`
  font-size: 20;
`;

//header.jsx
export const TochableWrap = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
