import React from 'react';
import SearchResult from './SearchResult';

export default {
  title: 'TE/SearchResult',
  component: SearchResult,
};


export const Default = () => (
  <SearchResult
  results={[
  {
    id: 1,
    name: "Jasmine te",
    image: "https://blog.piquelife.com/wp-content/uploads/2020/08/Jasmine-Tea-Benefits-5-Research-Backed-Benefits-of-Jasmine-Tea.png",
  }
  ]}
/>
);
