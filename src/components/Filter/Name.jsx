import React from "react";
import styles from "./Name.module.css"

const Name = ({name}) => {
  return <p className={styles.name}>{name}</p>;
};

export default Name;
