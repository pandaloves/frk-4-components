import React, { useState } from "react";
import styles from './SearchResult.module.css';
import { Popup } from "../Popup";


const SearchResult = ({ results }) => {
   const [selectedTea, setSelectedTea] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
  
    const handleClick = (tea) => {
      setSelectedTea(tea);
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      console.log("Closing popup");
      setShowPopup(false);
      setSelectedTea(null);
    };
  

  return (
    <div>
      <div className={styles.resultContainer}>
        {results.map((result) => (
          <div key={result.id} className={styles.resultItem}>
            <img
              src={result.image}
              alt={result.name}
              className={styles.image}
              onClick={() => handleClick(result)}
            />
            <h3 className={styles.resultHeader} onClick={() => handleClick(result)}>{result.name}</h3>
          </div>
        ))}
      </div>
      {showPopup && (
        <Popup productsData={selectedTea} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default SearchResult;
