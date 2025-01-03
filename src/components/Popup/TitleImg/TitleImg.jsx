import React from "react";
import styles from './TitleImg.module.css';

const TitleImg = ({ title, img }) => {
    return(
        <div className={styles.contentWrapper}>
            <div className={styles.imgContainer}>
                <img src={img} className={styles.img} alt="Tea image" />
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}

export default TitleImg;