import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./styles";

// Icons
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, icon }) => {
  const navigation = useNavigation();
  return (
    <Container>
      {icon && (
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginRight: 30 }}
        />
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
