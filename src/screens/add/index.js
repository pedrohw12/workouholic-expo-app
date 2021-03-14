import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Alert, SafeAreaView } from "react-native";

// Components
import Header from "../../components/Header";
import Radio from "../../components/Radio";
import ScreenContainer from "../../components/Screen-container";
import Input from "../../components/Input";

// Icons
import { AntDesign } from "@expo/vector-icons";

// Styles
import {
  RadioContainer,
  AddButton,
  ButtonText,
  NewExercise,
  ExercisesList,
  Title,
  ExerciseTitle,
  SaveButton,
} from "./styles";

const newWorkoutOptions = [
  {
    text: "Treino",
    type: "exercise",
  },
  {
    text: "Ficha",
    type: "list",
  },
  {
    text: "Periodização",
    type: "period",
  },
];

const Add = () => {
  const navigation = useNavigation();
  const [toggleSave, setToggleSave] = useState(false);
  const [selectedOption, setSelectedOption] = useState("exercise");
  const [exercises, setExercises] = useState([1, 2, 3, 4, 5]);
  const [signed] = useState(false);

  const handleSave = () => {
    setToggleSave(!toggleSave);
    if (!exercises.length && !toggleSave) {
      return Alert.alert("Ops!", "Não há treinos a serem salvos");
    }

    if (!toggleSave) {
      Alert.alert(
        "Treino salvo!",
        "Seu treino foi criado e aparecerá agora nas buscas"
      );
      navigation.navigate("BUSCAR");

      setExercises([]);
    }
  };

  const handleAddWorkout = () => {
    navigation.navigate("CONFIGURAÇÕES", { signed });
    if (!signed) {
      return Alert.alert(
        "Ops!",
        "É necessário estar logado para criar treinos."
      );
    }
    navigation.navigate("AddWorkout", { exercise: null });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Adicionar novo" />
      <ScreenContainer>
        <Input
          marginBottom="20px"
          placeholder={`Título ${
            selectedOption === "exercise"
              ? "do treino"
              : selectedOption === "list"
              ? "da lista"
              : "da periodização"
          }`}
        />
        <Input placeholder="Autor" />
        <AddButton onPress={handleAddWorkout}>
          <ButtonText>Criar exercício</ButtonText>
        </AddButton>

        <Title>Exercícios adicionados</Title>
        <ExercisesList>
          {!exercises.length ? (
            <ExerciseTitle>Nenhum exerício criado</ExerciseTitle>
          ) : (
            exercises.map((exercise, index) => (
              <NewExercise
                key={index}
                onPress={() => navigation.navigate("AddWorkout", { exercise })}
              >
                <ExerciseTitle>Exercicio {index + 1}</ExerciseTitle>
              </NewExercise>
            ))
          )}
        </ExercisesList>
        <SaveButton onPress={handleSave}>
          <AntDesign
            name="save"
            size={24}
            color={toggleSave ? "red" : "white"}
          />
        </SaveButton>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default Add;
