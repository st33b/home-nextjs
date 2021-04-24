import React from 'react';

import styles from './education.module.scss';
import {Card} from "react-bootstrap";

const education = () => {
  return (
    <div className={styles.Education}>
      <Card className={styles.Segment}>
        <Card.Body>
          <Card.Title>
            University of Massachusetts at Amherst
          </Card.Title>
          <Card.Text>
            Graduate Study in{' '}
            <a href="http://www.cs.umass.edu/">
              Computer Science
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          2002-2003
        </Card.Footer>
      </Card>

      <Card className={styles.Segment}>
        <Card.Body>
          <Card.Title>
            University of Texas at Austin
          </Card.Title>
          <Card.Text>
            B.S. in{' '}
            <a href="http://www.cs.utexas.edu">
              Computer Science
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          1998-2002
        </Card.Footer>
      </Card>
    </div>
  );
};

export default education;
