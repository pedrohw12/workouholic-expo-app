import React, { useState } from "react";
import { SafeAreaView } from "react-native";

// Data
import data from "../../data";

// Components
import ScreenContainer from "../../components/Screen-container";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";

// Styles
import { ListContainer } from "./styles";

const Favorites = () => {
  const [search, setSearch] = useState("");

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
        <SearchInput
          placeholder="Buscar..."
          onChangeText={(txt) => setSearch(txt.toLowerCase())}
        />
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

export default Favorites;
