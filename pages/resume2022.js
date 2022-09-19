import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layouts/Layout2022/Layout2022";
import PageHeader from "../components/2022/PageHeader/PageHeader";
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
    </Layout>
  );
};

export default index;
