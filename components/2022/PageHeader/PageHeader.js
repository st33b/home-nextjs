import Image from "next/image";

import styles from './PageHeader.module.scss';

const pageHeader = () => {
  return (
    <div className={styles.Header}>
      <div className={`${styles.Name} d-flex justify-content-center`}>
        <h1 className="display-4">
          Scott Stebleton
        </h1>
      </div>
      <ul className={`${styles.Roles} d-flex justify-content-center`}>
        <li>
          Software Engineer
        </li>
        <li>
          Leader
        </li>
        <li>
          Cat Dad
        </li>
      </ul>
    </div>
  );
};

export default pageHeader;
