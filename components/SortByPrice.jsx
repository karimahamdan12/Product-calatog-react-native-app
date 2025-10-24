import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS } from "../constants";
export default function SortByPrice({ isSortAsc, setIsSortAsc }) {
  return (
    <TouchableOpacity onPress={() => setIsSortAsc(!isSortAsc)}>
      <View style={styles.sortWrapper}>
        <Text>Sort </Text>
        <View style={styles.priceSection}>
          <Text> by price : {isSortAsc ? "Low → High" : "High → Low"}</Text>
          <Text>
            <MaterialIcons name="navigate-next" size={18} color="black" />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  sortWrapper: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: BORDER_RADIUS,
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
