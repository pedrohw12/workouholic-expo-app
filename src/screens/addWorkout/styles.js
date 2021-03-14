import styled from "styled-components/native";

export const RadioContainer = styled.View`
  align-items: stretch;
  margin-bottom: 50px;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 10px;
  background-color: #44bd32;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const NewExercise = styled.View`
  background-color: #e9e9e9;
  justify-content: center;
  padding-top: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ExercisesList = styled.ScrollView``;

export const Title = styled.Text`
  font-weight: bold;
`;

export const DeletExerciseButton = styled(AddButton)`
  background-color: #f33;
  margin-top: 30px;
`;
