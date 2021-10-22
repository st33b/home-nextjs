import React from "react";
import Image from "next/image";

import styles from './blm.module.scss';

const blm = () => {
  return (
    <div className={styles.BlackLivesMatter + " d-flex justify-content-between align-items-center"}>
      <Image src="/images/progress_flag.jpg"
             alt="The Progress Pride flag"
             height={34}
             width={53} />
      <h3>
        <a href="https://blacklivesmatter.com/" target='_new'>
          <span className="visually-hidden">Black Lives Matter</span>
          <span className={styles.WeightB + " aria-hidden"}>#</span>
          <span className={styles.WeightA + " aria-hidden"}>Black</span>
          <span className={styles.WeightB + " aria-hidden"}>Lives</span>
          <span className={styles.WeightA + " aria-hidden"}>Matter</span>
        </a>
      </h3>
      <Image src="/images/progress_flag.jpg"
             alt="The Progress Pride flag"
             height={34}
             width={53} />
    </div>
  );
};

export default blm;
