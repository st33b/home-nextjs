import Layout from "../components/layouts/Layout2022/Layout2022";

import styles from '../styles/index.module.scss'
import PageHeader from "../components/2022/PageHeader/PageHeader";

const index = () => {
  return (
    <Layout>
      <div>
        <PageHeader/>


        <Contact />

        <Tabs defaultActiveKey={"experience"}
              id={"resume-tabs"}
              className={styles.Menu + " d-flex justify-content-between justify-content-sm-center"}>
          <Tab title={"Experience"} eventKey={"experience"} tabClassName={styles.MenuItem}>
            <Experience />
          </Tab>
          <Tab title={"On the OnTheSide"} eventKey={"side_projects"} tabClassName={styles.MenuItem}>
            <OnTheSide />
          </Tab>
          <Tab title={"Skills"} eventKey={"skills"} tabClassName={styles.MenuItem}>
            <Skills />
          </Tab>
          <Tab title={".edu"} eventKey={"education"} tabClassName={styles.MenuItem}>
            <Education />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default index;
