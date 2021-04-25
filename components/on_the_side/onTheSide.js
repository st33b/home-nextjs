import React from 'react';

import Websites from './websites';
import Registration from './registration';

import styles from './side.module.scss';

const onTheSide = () => {
  return (
    <div className={styles.SideProjects}>
      <Registration />
      <Websites />
    </div>
  );
};

export default onTheSide;
