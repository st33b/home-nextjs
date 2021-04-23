import React from 'react';
import Nav from 'react-bootstrap/Nav';

import styles from './navigation.module.scss';

const navigation = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="experience" className={styles.Navigation}>
      <Nav.Item>
        <Nav.Link href="#"
                  className={styles.NavItem}
                  eventKey="experience">
          Experience
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#"
                  className={styles.NavItem}
                  eventKey="side_projects">
          On the Side
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#"
                  className={styles.NavItem}
                  eventKey="skills">
          Skills
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#"
                  className={styles.NavItem}
                  eventKey="education">
          .edu
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default navigation;
