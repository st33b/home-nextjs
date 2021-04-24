import React from "react";
import {Col, Row} from "react-bootstrap";

import styles from '../../styles/roles.module.scss';

const beatport = () => {
  return (
    <div className={styles.Employer}>
      <div className={styles.Name}>
        <h2>
          Beatport
        </h2>
      </div>

      <div className={styles.Role}>
        <div className={styles.Header + " d-sm-flex justify-content-between"}>
          <h3 className={styles.Title}>
            Database Developer
          </h3>
          <h5 className={styles.Dates}>
            2012-2013
          </h5>
        </div>
        <div className={styles.Details}>
          <Row>
            <Col className={styles.Responsibilities}>
              <h4>
                Responsibilities
              </h4>
              <p>
                Full-stack developer on several customer-facing projects and RESTful APIs, with a focus on database integration: schema design, data modeling, and optimizing our applications' and APIs' integration with the data layer.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default beatport;
