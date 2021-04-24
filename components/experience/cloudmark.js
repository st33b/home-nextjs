import React from "react";
import {Col, Row} from "react-bootstrap";

import styles from '../../styles/roles.module.scss';

const cloudmark = () => {
  return (
    <div className={styles.Employer}>
      <div className={styles.Name}>
        <h2>
          Cloudmark
        </h2>
      </div>

      <div className={styles.Role}>
        <div className={styles.Header + " d-sm-flex justify-content-between"}>
          <h3 className={styles.Title}>
            Senior Web Developer
          </h3>
          <h5 className={styles.Dates}>
            2009-2012
          </h5>
        </div>
        <div className={styles.Details}>
          <Row>
            <Col className={styles.Responsibilities}>
              <h4>
                Responsibilities
              </h4>
              <p>
                Full-stack developer on internal tools as well as public- and customer-facing web applications. I introduced and drove the adoption of the Symfony framework for data- and interaction-driven applications. I also served as mentor to the junior member of our team.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default cloudmark;
