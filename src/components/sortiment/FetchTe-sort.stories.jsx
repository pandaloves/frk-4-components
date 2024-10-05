import FetchTe from "./FetchTe-sort";
import teaData from "../../../public/api/products.json";

export default {
  title: "TE/FetchTeInfo",
  component: FetchTe,
};

export const Default = {
  args: {
    sortimentData: teaData,
  },
};
