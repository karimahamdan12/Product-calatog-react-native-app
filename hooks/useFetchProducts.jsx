import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data = await AsyncStorage.getItem("products");
        if (data) {
          data = JSON.parse(data);
        } else {
          const response = await fetch("https://fakestoreapi.com/products");
          if (!response.ok) throw new Error("Something went wrong...");
          data = await response.json();
          await AsyncStorage.setItem("products", JSON.stringify(data));
        }

        setProductList(data);
      } catch (e) {
        console.error(e);
        setError("Oh! Something went wrong...");
      }
    };

    fetchProducts();
  }, []);

  return { productList, error, setProductList };
}
