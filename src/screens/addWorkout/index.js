import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Alert, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import Header from "../../components/Header";
import ScreenContainer from "../../components/Screen-container";
import Input from "../../components/Input";

// Styles
import {
  AddButton,
  ButtonText,
  NewExercise,
  DeletExerciseButton,
} from "./styles";

const AddWorkout = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [rest, setRest] = useState("");
  const [info, setInfo] = useState("");

  const {
    params: { exercise },
  } = useRoute();

  const handleCreateExercise = () => {
    if (!name || !sets || !rest || !info) {
      return Alert.alert("Ops!", "É necessário preencher todos os campos.");
    }

    Alert.alert(
      "Exercício criado com sucesso!",
      "Você acabou de adicionar um novo exercício."
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header icon title={exercise ? "Exercício" : "Criar novo exercício"} />
      <ScreenContainer>
        <NewExercise>
          <Input
            marginBottom="10px"
            placeholder="Nome do exercício"
            onChangeText={setName}
          />
          <Input
            marginBottom="10px"
            placeholder="3x12"
            onChangeText={setSets}
          />
          <Input
            marginBottom="10px"
            placeholder="60s de descanso"
            onChangeText={setRest}
          />
          <Input
            placeholder="Neste exercício, executar todas as séries até a falha"
            height="100px"
            onChangeText={setInfo}
          />
        </NewExercise>
      </ScreenContainer>
      {exercise ? (
        <DeletExerciseButton>
          <ButtonText>Deletar exercício</ButtonText>
        </DeletExerciseButton>
      ) : (
        <AddButton onPress={() => handleCreateExercise()}>
          <ButtonText>Criar exercício</ButtonText>
        </AddButton>
      )}
    </SafeAreaView>
  );
};

export default AddWorkout;
