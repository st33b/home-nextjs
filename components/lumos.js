import React from "react";
import {Col, Row} from "react-bootstrap";

import styles from '../styles/roles.module.scss';

const lumos = () => {
  return (
    <div className={styles.Employer}>
      <div className={styles.Name}>
        <h2>
          Lumos Labs
        </h2>
      </div>

      <div className={styles.Role}>
        <div className={styles.Header + " d-sm-flex justify-content-between"}>
          <h3 className={styles.Title}>
            Senior Software Engineer
          </h3>
          <h5 className={styles.Dates}>
            2015-2016
          </h5>
        </div>
        <div className={styles.Details}>
          <Row>
            <Col className={styles.Responsibilities}>
              <h4>
                Responsibilities
              </h4>
              <p>
                I was part of the Platform team, responsible for building and supporting payment systems, event and analytics tracking, transactional and marketing emails, and the customer service portal, amongst others.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default lumos;
