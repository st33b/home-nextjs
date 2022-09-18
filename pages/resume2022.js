import Layout from "../components/layouts/Layout2022/Layout2022";

import styles from '../styles/index.module.scss'
import PageHeader from "../components/2022/PageHeader/PageHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Education from "../components/2022/Education/Education";
import OnTheSide from "../components/2022/OnTheSide/OnTheSide";
import Skills from "../components/2022/Skills/Skills";
import Experience from "../components/2022/Experience/Experience";
import Contact from "../components/2022/Contact/Contact";

const index = () => {
  return (
    <Layout>
      <Row>
        <Col>
          <PageHeader/>
        </Col>
      </Row>

        <Row>
          <Col md={4}>
            <Contact/>
            <Education/>
            <OnTheSide/>
            <Skills/>
          </Col>
          <Col>
            <Experience/>
          </Col>
        </Row>

        {/*<Tabs defaultActiveKey={"experience"}*/}
        {/*      id={"resume-tabs"}*/}
        {/*      className={styles.Menu + " d-flex justify-content-between justify-content-sm-center"}>*/}
        {/*  <Tab title={"Experience"} eventKey={"experience"} tabClassName={styles.MenuItem}>*/}
        {/*    <Experience />*/}
        {/*  </Tab>*/}
        {/*  <Tab title={"On the OnTheSide"} eventKey={"side_projects"} tabClassName={styles.MenuItem}>*/}
        {/*    <OnTheSide />*/}
        {/*  </Tab>*/}
        {/*  <Tab title={"Skills"} eventKey={"skills"} tabClassName={styles.MenuItem}>*/}
        {/*    <Skills />*/}
        {/*  </Tab>*/}
        {/*  <Tab title={".edu"} eventKey={"education"} tabClassName={styles.MenuItem}>*/}
        {/*    <Education />*/}
        {/*  </Tab>*/}
        {/*</Tabs>*/}
    </Layout>
  );
};

export default index;
