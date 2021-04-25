import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

import Layout from '../components/layout';
import BLM from '../components/blm';
import Contact from '../components/contact';
import Experience from '../components/experience/experience';
import Education from '../components/education';
import Skills from '../components/skills';
import OnTheSide from '../components/on_the_side/onTheSide';

import styles from '../styles/index.module.scss'

const index = () => {
  return (
    <Layout>
      <div className={styles.Home}>
        <BLM />
        <Contact />

        <Tabs defaultActiveKey="side_projects" className={styles.Menu + " d-flex justify-content-between justify-content-sm-center"}>
          <Tab title="Experience" eventKey="experience" tabClassName={styles.MenuItem}>
            <Experience />
          </Tab>
          <Tab title="On the Side" eventKey="side_projects" tabClassName={styles.MenuItem}>
            <OnTheSide />
          </Tab>
          <Tab title="Skills" eventKey="skills" tabClassName={styles.MenuItem}>
            <Skills />
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
