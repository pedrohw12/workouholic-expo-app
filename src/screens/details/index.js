import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import ScreenContainer from "../../components/Screen-container";
import Header from "../../components/Header";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import {
  FavButton,
  Author,
  ListContainer,
  Exercise,
  ExerciseTitle,
  ExerciseInfo,
} from "./styles";

const Details = () => {
  const {
    params: { name, author, content },
  } = useRoute();

  const [toggleFavorite, setToggleFavorite] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={name} icon />
      <ScreenContainer>
        <Author>{author}</Author>
        <ListContainer>
          {content.map((item, index) => (
            <Exercise>
              <ExerciseTitle key={index}>{item.ex}</ExerciseTitle>
              <ExerciseInfo>{item.rep}</ExerciseInfo>
              <ExerciseInfo>{item.rest}</ExerciseInfo>
              <ExerciseInfo>{item.info}</ExerciseInfo>
            </Exercise>
          ))}
        </ListContainer>

        <FavButton onPress={() => setToggleFavorite(!toggleFavorite)}>
          <MaterialIcons
            name="favorite-border"
            size={24}
            color={toggleFavorite ? "red" : "white"}
          />
        </FavButton>
      </ScreenContainer>
    </SafeAreaView>
  );
};
export default Details;
