import styled from "styled-components/native";

export const FavButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
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

export const Author = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Exercise = styled.View`
  padding: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ListContainer = styled.ScrollView`
  margin-top: 50px;
`;

export const ExerciseTitle = styled.Text`
  font-weight: bold;
`;

export const ExerciseInfo = styled.Text`
  margin-top: 5px;
`;
