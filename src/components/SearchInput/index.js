import React from "react";

// Components
import Input from "../Input";

// Icons
import { AntDesign } from "@expo/vector-icons";

// Styles
import { InputContainer } from "./styles";

const SearchInput = ({ placeholder, ...props }) => {
  return (
    <InputContainer>
      <Input placeholder={placeholder} {...props} />
      <AntDesign
        name="search1"
        size={24}
        color="black"
        style={{ position: "absolute", right: 15, top: 13 }}
      />
    </InputContainer>
  );
};

export default SearchInput;
