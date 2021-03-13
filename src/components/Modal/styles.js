import styled from "styled-components/native";

export const ModalContainer = styled.View`
  height: 300px;
  width: 80%;
  background-color: #d9d9d9;
  position: absolute;
  top: 100px;
  margin-left: 21px;
  margin-top: 55px;
  width: 90%;
  border-radius: 10px;
  height: 400px;
  padding: 20px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 22px;
  flex: 1;
`;

export const FilterOptions = styled.FlatList`
  margin-top: 5px;
`;

export const FilterOptionText = styled.Text`
  font-size: 22px;
  color: ${props => props.color || '#000'};
`;

export const FilterOption = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
