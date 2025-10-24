import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
export const CATEGORIES = [
  { label: "All", value: "All" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

export const CATEGORY_INFOS_MAPPING = {
  electronics: {
    icon: <Entypo name="tv" size={20} color="#1A73E8" />,
    bgColor: "#E6F0FF",
  },
  "men's clothing": {
    icon: <Entypo name="man" size={20} color="#5A3EE0" />,
    bgColor: "#EDE7FF",
  },
  "women's clothing": {
    icon: <Ionicons name="woman" size={20} color="#E63963" />,
    bgColor: "#FFE6EC",
  },
  jewelery: {
    icon: <Feather name="watch" size={20} color="#C49B00" />,
    bgColor: "#FFF6D9",
  },
};

export const BORDER_RADIUS = 16;
export const MAX_TITLE_CHARACTERS = 50;
export const MAX_DESCRIPTION_CHARACTERS = 100;
