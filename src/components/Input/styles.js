import styled from "styled-components/native";

export const Input = styled.TextInput`
  background-color: #ddd;
  height: ${(props) => props.height || "50px"};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;
