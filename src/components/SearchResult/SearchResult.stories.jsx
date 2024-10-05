import React from "react";
import SearchResult from "./SearchResult";
import teaData from "../../../public/api/products.json";

export default {
  title: "TE/SearchResult",
  component: SearchResult,
};

export const Default = {
  args: {
    results: teaData,
  },
};
