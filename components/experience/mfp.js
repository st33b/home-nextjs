import React from "react";
import {Col, Row} from "react-bootstrap";

import styles from '../../styles/roles.module.scss';

const mfp = () => {
  return (
    <div className={styles.Employer}>
      <div className={styles.Name}>
        <h2>
          MyFitnessPal
        </h2>
      </div>

      <div className={styles.Role}>
        <div className={styles.Header + " d-sm-flex justify-content-between"}>
          <h3 className={styles.Title}>
            Lead Software Engineer
          </h3>
          <h5 className={styles.Dates}>
            2014-2015
          </h5>
        </div>
        <div className={styles.Details}>
          <Row>
            <Col className={styles.Responsibilities}>
              <h4>
                Responsibilities
              </h4>
              <p>
                I helped drive the migration from a Ruby-on-Rails monolith toward a service- oriented architecture, and served as a leader in RESTful API design. As a team lead, I mentored junior developers and an intern on their career paths, in addition to developing high-level estimates of the time and effort required to design and implement new features.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default mfp;
