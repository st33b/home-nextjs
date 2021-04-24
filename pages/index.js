import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

import Layout from '../components/layout';
import BLM from '../components/blm';
import Contact from '../components/contact';
import Experience from '../components/experience/experience';
import Education from '../components/education';

import styles from '../styles/index.module.scss'

const index = () => {
  return (
    <Layout>
      <div className={styles.Home}>
        <BLM />
        <Contact />

        <Tabs defaultActiveKey="experience" className={styles.Menu + " d-flex justify-content-between justify-content-sm-center"}>
          <Tab title="Experience" eventKey="experience" tabClassName={styles.MenuItem}>
            <Experience />
          </Tab>
          <Tab title="On the Side" eventKey="side_projects" tabClassName={styles.MenuItem}>
          </Tab>
          <Tab title="Skills" eventKey="skills" tabClassName={styles.MenuItem}>
          </Tab>
          <Tab title=".edu" eventKey="education" tabClassName={styles.MenuItem}>
            <Education />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default index;
