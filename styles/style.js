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
  flex: 2;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-top: 10px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  background-color: lightpink;
  padding: 20px;
  border-radius: 30px;
  color: #fff;
  margin-top: 10px;
`;

export const Paragraph = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

//header.jsx
export const TochableWrap = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

//generator.jsx
export const ButtonWrap = styled.View`
  padding: 16px;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: lightyellow;
`;

//numlist.jsx
export const TextWrap = styled.TouchableOpacity`
  background-color: #cecece;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-bottom: 3px;
`;

export const NumListText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;

//input.jsx
export const TextInputWrap = styled.TextInput`
  background-color: #ececec;
  width: 100%;
  padding: 5px;
  font-size: 20px;
`;
