import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
`;

export const InputDescription = styled.Text``;

export const DeleteAccount = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: #f33;
  border-radius: 10px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
