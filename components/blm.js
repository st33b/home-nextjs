import React from "react";

import styles from './blm.module.scss';

const blm = () => {
  return (
    <div className={styles.BlackLivesMatter}>
      <h3>
        <a href="https://blacklivesmatter.com/" target='_new'>
          <span className="sr-only">Black Lives Matter</span>
          <span className={styles.WeightB + " aria-hidden"}>#</span>
          <span className={styles.WeightA + " aria-hidden"}>Black</span>
          <span className={styles.WeightB + " aria-hidden"}>Lives</span>
          <span className={styles.WeightA + " aria-hidden"}>Matter</span>
        </a>
      </h3>
    </div>
  );
};

export default blm;
