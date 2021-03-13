import React, { useState } from "react";
import { Modal, SafeAreaView, Switch } from "react-native";

// Icons
import { AntDesign } from "@expo/vector-icons";
import {
  ModalContainer,
  ModalHeader,
  Title,
  FilterOption,
  FilterOptionText,
  FilterOptions,
} from "./styles";

const ModalComponent = ({
  visible,
  onRequestClose,
  onFilter,
  filterHasChanged,
}) => {
  const [type, setType] = useState(["btc-purchase", "transfer-bank", "bonus"]);
  const [options] = useState([
    {
      title: "Treino",
      operationType: "btc-purchase",
      onValueChange: (state) => toggleFilter(state, operationType),
      value: type.indexOf("btc-purchase") > -1,
    },
    {
      title: "Ficha",
      operationType: "transfer-bank",
      onValueChange: (state) => toggleFilter(state, operationType),
      value: type.indexOf("transfer-bank") > -1,
    },
    {
      title: "Periodização",
      operationType: "bonus",
      onValueChange: (state) => toggleFilter(state, operationType),
      value: type.indexOf("bonus") > -1,
    },
  ]);

  const toggleFilter = (state, operationType) => {
    if (state === false) {
      let types = [...type];

      types.splice(types.indexOf(operationType), 1);

      onFilter(types);
      setType(types);
      filterHasChanged(types.length !== options.length);
    } else {
      let types = [...type, operationType];

      onFilter(types);
      setType(types);
      filterHasChanged(types.length !== options.length);
    }
  };

  const renderItem = ({ item }) => {
    const { operationType } = item;
    return (
      <FilterOption>
        <FilterOptionText> {item.title} </FilterOptionText>
        <Switch
          trackColor={{ false: "#767577", true: "#33f" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(state) => toggleFilter(state, operationType)}
          value={type.indexOf(operationType) > -1}
        />
      </FilterOption>
    );
  };

  return (
    <SafeAreaView>
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <ModalContainer>
          <ModalHeader>
            <Title>Filtro</Title>
            <AntDesign
              onPress={onRequestClose}
              name="closecircleo"
              size={30}
              color="black"
            />
          </ModalHeader>
          <FilterOptions
            data={options}
            keyExtractor={(item) => item.title}
            renderItem={renderItem}
          />
        </ModalContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalComponent;
