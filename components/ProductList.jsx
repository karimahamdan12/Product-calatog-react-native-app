import { StyleSheet, View } from "react-native";
import Product from "./Product";

function ProductList({ productList, error }) {
  if (error) {
    return <View class={styles.error}>{error}</View>;
  }
  return (
    <>
      <View>
        {productList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </View>
    </>
  );
}

export default ProductList;
const styles = StyleSheet.create({
  error: {
    backgroundColor: "#fdecea",
    color: "#b71c1c",
    padding: "1rem",
  },
});
