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
  height: 40px;
  border-radius: 10px;
  background-color: #44bd32;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const NewExercise = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #e9e9e9;
  justify-content: center;
  padding: 20px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ExercisesList = styled.ScrollView``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const DeletExerciseButton = styled(AddButton)`
  background-color: #f33;
  margin-top: 30px;
`;

export const ExerciseTitle = styled.Text`
  font-weight: bold;
`;

export const SaveButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: #666;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
