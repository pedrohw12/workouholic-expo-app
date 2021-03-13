import React from "react";
import { SafeAreaView } from "react-native";
import { useState } from "react/cjs/react.development";

// Components
import Header from "../../components/Header";
import Radio from "../../components/Radio";
import ScreenContainer from "../../components/Screen-container";
import Input from "../../components/Input";

// Styles
import {
  RadioContainer,
  AddButton,
  ButtonText,
  NewExercise,
  ExercisesList,
  Title,
  DeletExerciseButton,
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
  const [selectedOption, setSelectedOption] = useState("exercise");
  const [numberOfExercises, setNumberOfExercises] = useState([]);

  const addNewExercise = () => {
    let newArray = [...numberOfExercises];
    newArray.push(1);
    setNumberOfExercises(newArray);
  };

  const deleteExercise = (index) => {
    let newArray = [...numberOfExercises];
    newArray.splice(index, 1);
    setNumberOfExercises(newArray);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Adicionar novo" />
      <ScreenContainer>
        <RadioContainer>
          <Radio
            _onPress={(item) => setSelectedOption(item.type)}
            _selectedOption={selectedOption}
            _options={newWorkoutOptions}
            _direction="row"
            marginTop={"10px"}
            marginBottom={"20px"}
          />
        </RadioContainer>

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
        <AddButton onPress={() => addNewExercise()}>
          <ButtonText>Novo campo</ButtonText>
        </AddButton>

        <ExercisesList>
          {numberOfExercises?.map((exercise, index) => (
            <>
              <Title>Exercício {index + 1}</Title>
              <NewExercise key={index}>
                <Input marginBottom="10px" placeholder="Nome do exercício" />
                <Input marginBottom="10px" placeholder="3x12" />
                <Input marginBottom="10px" placeholder="60s de descanso" />
                <Input
                  placeholder="Neste exercício, executar todas as séries até a falha"
                  height="100px"
                />
                <DeletExerciseButton onPress={() => deleteExercise(index)}>
                  <ButtonText>Deletar exercício {index + 1}</ButtonText>
                </DeletExerciseButton>
              </NewExercise>
            </>
          ))}
        </ExercisesList>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default Add;
