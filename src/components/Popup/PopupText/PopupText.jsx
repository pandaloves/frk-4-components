import React from "react";
import styles from './PopupText.module.css'

const PopupText = ({ type, caffeine, effect }) => {
    return(
        <div className={styles.contentContainer}>
            <div className={styles.contentWrapper}>
                <h3 className={styles.title}>Typ:</h3>
                <p className={styles.text}>{type}</p>
            </div>
            <div className={styles.contentWrapper}>
                <h3 className={styles.title}>Koffein:</h3>
                <p className={styles.text}>{caffeine}</p>
            </div>
            <div className={styles.contentWrapper}>
                <h3 className={styles.title}>Effekt:</h3>
                <p className={styles.text}>{effect}</p>
            </div>
        </div>
    )
}

export default PopupText;