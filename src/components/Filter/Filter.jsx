import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ teaData }) => {
  if (!teaData || teaData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Filter</h2>
      <div className={styles.container}>
        {teaData.map((item) => (
         <a href="#" target="_blank" key={item.id} className={styles.link}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src={item.image} alt={item.name} />
          </div>
          <p className={styles.name}>{item.name}</p>
         </a>
        ))}
      </div>
    </div>
  );
};

export default Filter;
