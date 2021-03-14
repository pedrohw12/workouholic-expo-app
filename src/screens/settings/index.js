import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

// Components
import ScreenContainer from "../../components/Screen-container";
import Header from "../../components/Header";

// Styles
import {
  Content,
  InputDescription,
  DeleteAccount,
  CreateAccount,
  ButtonText,
} from "./styles";

const Settings = () => {
  const { params } = useRoute();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <Header title="Configurações" />

        <Content>
          <InputDescription>Usuário: Pedro Wanderley</InputDescription>
          <InputDescription>Senha: ***********</InputDescription>
        </Content>

        {params && params.signed ? (
          <DeleteAccount>
            <ButtonText>Deletar conta</ButtonText>
          </DeleteAccount>
        ) : (
          <CreateAccount>
            <ButtonText>Criar conta</ButtonText>
          </CreateAccount>
        )}
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default Settings;
