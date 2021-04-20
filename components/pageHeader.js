import React from "react";
import Image from "next/image";

import styles from './pageHeader.module.scss';

const pageHeader = () => {
  return (
  	<div className={styles.Header}>
      <div className={styles.Name + " d-flex justify-content-center"}>
        <h1 className="display-4">
          Scott Stebleton
        </h1>
      </div>
      <ul className={styles.Roles + " d-flex justify-content-center"}>
        <li>
          Software Engineer
        </li>
        <li>
          Manager
        </li>
        <li>
          Cat Dad
        </li>
      </ul>
      <Image src="/images/cycling.jpg"
             alt="The author on a bicycle, looking off to the left"
             width={800}
             height={360}
             layout="responsive" />
  	</div>
  );
};

export default pageHeader;
