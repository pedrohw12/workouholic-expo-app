import React from "react";
import { SafeAreaView } from "react-native";

// Components
import ScreenContainer from "../../components/Screen-container";
import Header from "../../components/Header";

// Styles
import { Content, InputDescription, DeleteAccount, ButtonText } from "./styles";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <Header title="Configurações" />

        <Content>
          <InputDescription>Usuário: Pedro Wanderley</InputDescription>
          <InputDescription>Senha: ***********</InputDescription>
        </Content>

        <DeleteAccount>
          <ButtonText>Deletar conta</ButtonText>
        </DeleteAccount>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default Settings;
