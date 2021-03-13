import React from "react";

// Styles
import { Input } from "./styles";

const InputComponent = ({ placeholder, ...props }) => {
  return <Input placeholder={placeholder} {...props} />;
};

export default InputComponent;
