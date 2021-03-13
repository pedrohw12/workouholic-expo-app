import React, { useState } from "react";
import { SafeAreaView } from "react-native";

// Data
import data from "../../data";

// Components
import ScreenContainer from "../../components/Screen-container";
import Card from "../../components/Card";
import SearchInput from "../../components/SearchInput";
import Modal from "../../components/Modal";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Styles
import { ListContainer, SearchArea } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function filterItems(item) {
    const { name, author, type } = item;
    const normalizeName = name.toLowerCase();
    const normalizeAuthor = author.toLowerCase();
    const normalizeType = type.toLowerCase();

    return (
      normalizeName.includes(search) ||
      normalizeAuthor.includes(search) ||
      normalizeType.includes(search)
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <SearchArea>
          <SearchInput
            placeholder="Buscar..."
            onChangeText={(txt) => setSearch(txt.toLowerCase())}
          />
          <Ionicons
            onPress={() => setModalVisible(true)}
            name="filter-sharp"
            size={24}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            onFilter={() => {}}
            filterHasChanged={() => {}}
          />
        </SearchArea>
        <ListContainer>
          {data
            .filter((item) => filterItems(item))
            .map((item, index) => (
              <Card
                key={index}
                name={item.name}
                author={item.author}
                type={item.type}
                content={item.content}
              />
            ))}
        </ListContainer>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default Search;
