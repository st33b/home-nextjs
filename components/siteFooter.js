import React from "react";
import Card from "react-bootstrap/Card";

import styles from './siteFooter.module.scss'

const siteFooter = () => {
  return (
    <div className={styles.Footer}>
      <Card bg="light">
        <Card.Body>
          <p>
            <span className="sr-only">Copyright</span>
            <span className="aria-hidden">{String.fromCharCode(169)}{' '}</span>
             2021 Scott Stebleton
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default siteFooter;
