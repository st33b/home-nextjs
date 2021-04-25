import React from "react";
import {Col, Row} from "react-bootstrap";

import styles from './roles.module.scss';

const omada = () => {
  return (
    <div className={styles.Employer}>
      <div className={styles.Name}>
        <h2>
          Omada Health, Inc.
        </h2>
      </div>

      <div className={styles.Role}>
        <div className={styles.Header + " d-sm-flex justify-content-between"}>
          <h3 className={styles.Title}>
            Senior Manager, Engineering
          </h3>
          <h5 className={styles.Dates}>
            2018-present
          </h5>
        </div>
        <div className={styles.Details}>
          <Row>
            <Col xs={12}
                 md={6}
                 lg={6}
                 className={styles.Responsibilities}>
              <h4>
                Responsibilities
              </h4>
              <p>
                Hiring, performance management, guidance and growth, mentorship, capacity planning, roadmap definition, technical vision and decision-making.
              </p>
            </Col>
            <Col xs={12}
                 md={6}
                 lg={6}
                 className={styles.Notable}>
              <h4>
                Noteworthy
              </h4>
              <ul>
                <li>Built and staffed two full teams</li>
                <li>Grew engineers into senior engineers, team leads, and managers.</li>
                <li>
                  Moved to Atlanta to build Omada's engineering presence in our new office.
                </li>
                <li>
                  Promoted from Manager to Senior Manager in 2019.
                </li>
                <li>
                  Leader of the{' '}
                  <strong>
                    Out@Omada
                  </strong>
                  {' '}employee resource group (ERG), 2020-present.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      <hr className={styles.RoleSeparator}/>

      <div className={styles.Role}>
        <div className={styles.Header + " d-sm-flex justify-content-between"}>
          <h3 className={styles.Title}>
            Senior Software Engineer
          </h3>
          <h5 className={styles.Dates}>
            2016-2018
          </h5>
        </div>
        <div className={styles.Details}>
          <Row>
            <Col xs={12}
                 className={styles.Responsibilities}>
              <h4>
                Responsibilities
              </h4>
              <p>
                Applying the philosophies of Agile and Test-Driven Development (TDD), I designed, built, and deployed software used by both participants in the Omada program as well as their Health Coaches.
              </p>
              <p>
                I worked to begin the transition away from a Ruby-on-Rails monolith, toward an event-driven, service-oriented architecture. This included reducing tight coupling between existing applications, improving performance, and evolving application architecture to reflect changes in our user base.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default omada;
