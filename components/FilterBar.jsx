import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { BORDER_RADIUS, CATEGORIES } from "../constants";
import CategoryList from "./CategoryList";
import SortByPrice from "./SortByPrice";

export default function FilterBar({ setFilteredData, productList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSortAsc, setIsSortAsc] = useState(true);

  const handleChangeCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  useEffect(() => {
    ApplyFilters(
      { searchTerm, selectedCategory, isSortAsc },
      productList,
      setFilteredData
    );
  }, [searchTerm, selectedCategory, isSortAsc]);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CategoryList
          categories={CATEGORIES}
          onChoseCategory={handleChangeCategory}
        />
      </ScrollView>
      <View style={styles.searchBar}>
        <Feather name="search" size={18} color="#989191ff" />
        <TextInput
          value={searchTerm}
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>
      <SortByPrice isSortAsc={isSortAsc} setIsSortAsc={setIsSortAsc} />
    </View>
  );
}

function ApplyFilters(filters, productList, setFilteredData) {
  const { searchTerm, selectedCategory, isSortAsc } = filters;

  let newData = [...productList];
  if (searchTerm) {
    newData = newData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (selectedCategory && selectedCategory !== "All") {
    newData = newData.filter(
      (product) => product.category === selectedCategory
    );
  }
  if (isSortAsc) {
    newData.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (!isSortAsc) {
    newData.sort((a, b) => Number(b.price) - Number(a.price));
  }
  setFilteredData(newData);
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 8,
    borderRadius: BORDER_RADIUS,
    height: 60,
    marginBottom: 16,
  },

  textInput: {
    flex: 1,
    height: "100%",
  },
});
