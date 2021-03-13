import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex-direction: ${(props) => props._direction || "row"};
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${(props) => props.marginTop || "20px"};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: #000;
  border-width: 2px;
  border-radius: 100px;
  margin-right: 0px;
  margin-bottom: 10px;
  padding: 5px 10px;
  min-width: 60px;
`;

const CheckedCircle = styled.View`
  width: 14px;
  height: 14px;
  border-color: #000;
  border-width: 2px;
  border-radius: 10px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
`;

const CheckedCircleDot = styled(CheckedCircle)`
  background-color: #000;
 
  
`;

export default function Radio({
  _options,
  _selectedOption,
  _direction,
  _onPress,
  ...props
}) {
  return (
    <Wrapper {...props}>
      {_options.map((item) => {
        return (
          <Button onPress={() => _onPress(item)} key={item.type}>
            <Text>{item.text}</Text>
            {_selectedOption === item.type ? (
              <CheckedCircleDot/>
            ) : (
              <CheckedCircle />
            )}
          </Button>
        );
      })}
    </Wrapper>
  );
}
