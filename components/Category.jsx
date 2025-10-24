import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BORDER_RADIUS } from "../constants";
export default function Category({ value, onChoseCategory, children }) {
  return (
    <TouchableOpacity onPress={() => onChoseCategory(value)}>
      <Text style={styles.category}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  category: {
    padding: 10,
    backgroundColor: "white",
    margin: 8,
    borderRadius: BORDER_RADIUS,
  },
});
