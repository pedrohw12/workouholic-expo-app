import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

// Icons
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  background-color: #c9c9c9;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`;

const Left = styled.View`
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 22px;
`;

const Right = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

const CardComponent = ({ name, author, type, content }) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() =>
        navigation.navigate("Detalhe", {
          name,
          author,
          type,
          content,
        })
      }
    >
      <Left>
        <Title>{name}</Title>
        <Text>{author}</Text>
      </Left>
      <Right>
        <Text>1k</Text>
        <MaterialIcons name="favorite-border" size={24} color="black" />
      </Right>
    </Card>
  );
};

export default CardComponent;
