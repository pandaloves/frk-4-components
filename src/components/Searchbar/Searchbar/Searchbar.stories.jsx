import SearchBar from "./Searchbar";
import teaData from "../../../../public/api/products.json";

export default {
  title: "TE/Searchbar",
  component: SearchBar,
};

export const Default = {
  args: {
    teaData: teaData,
  },
};
