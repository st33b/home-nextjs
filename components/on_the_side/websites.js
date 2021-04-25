import React from 'react';

import styles from './side.module.scss';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const websites = () => {
  return (
    <div className={styles.Project}>
      <Card>
        <Card.Header>
          <Card.Title className={styles.Title}>
            Bowling tournament websites
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            I maintain the informational websites for several IGBO-affiliated bowling tournaments. (You'll see some common design elements, since—in all honesty—I'm not a visual designer.)
          </Card.Text>
          <Row>
            <Col xs={12} md={6}>
              <img className="img-fluid"
                   src="/images/bigd_example.jpg"
                   alt="Thumbnail of one of my websites"
              />
            </Col>
            <Col xs={12} md={6}>
              <ul className={styles.ExampleList}>
                <li>
                  <a href="https://www.bigdclassic.com/">
                    Big D Classic (Dallas, TX)
                  </a>
                </li>
                <li>
                  <a href="http://goldengateclassic.org/">
                    Golden Gate Classic (San Francisco, CA)
                  </a>
                </li>
                <li>
                  <a href="http://okclassic.com/">
                    OKClassic (Oklahoma City, OK)
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default websites;
