import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterBar from "../components/FilterBar";

import ProductList from "../components/ProductList";
import useProducts from "../hooks/useFetchProducts";

const Index = () => {
  const { productList, error } = useProducts();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(productList);
  }, [productList]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FilterBar
          setFilteredData={setFilteredData}
          productList={productList}
        />
        <ScrollView>
          <ProductList productList={filteredData} error={error} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    paddingBottom: 100,
  },
});
