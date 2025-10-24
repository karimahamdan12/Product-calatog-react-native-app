import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  CATEGORY_INFOS_MAPPING,
  MAX_DESCRIPTION_CHARACTERS,
  MAX_TITLE_CHARACTERS,
} from "../constants";

function Product({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorites = () => {
    setIsFavorite(!isFavorite);
  };
  const categoryBackgroundColor =
    CATEGORY_INFOS_MAPPING[product.category]?.bgColor || "white";
  return (
    <View style={styles.product}>
      <View>
        <Text
          style={{
            backgroundColor: categoryBackgroundColor,
            padding: 8,
            alignSelf: "flex-start",
            borderRadius: 8,
          }}
        >
          {CATEGORY_INFOS_MAPPING[product.category].icon}
        </Text>
        <Image
          style={styles.productImage}
          source={{
            uri: product.image,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.productInfos}>
        <Text style={styles.productTitle}>
          {product.title.length > MAX_TITLE_CHARACTERS
            ? product.title.slice(0, MAX_TITLE_CHARACTERS) + "..."
            : product.title}
        </Text>
        <Text style={styles.productDescription}>
          {product.description.length > MAX_DESCRIPTION_CHARACTERS
            ? product.description.slice(0, MAX_DESCRIPTION_CHARACTERS) + "..."
            : product.description}
        </Text>

        <View style={styles.productPriceSection}>
          <Text style={styles.priceValue}>{product.price}$</Text>
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={() => toggleFavorites()}
          >
            <Entypo
              name={isFavorite ? "heart" : "heart-outlined"}
              size={24}
              color={isFavorite ? "#E63963" : "black"}
              title="press me"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Product;
const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "white",
    marginBottom: 16,
    borderRadius: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  productInfos: {
    flex: 1,
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    lineHeight: 22,
    marginBottom: 8,
  },
  productPriceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  favoriteIcon: {
    fontSize: 18,
  },
});
