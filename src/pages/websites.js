import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/Layout2022/Layout2022";
import PageHeader from "../components/PageHeader/PageHeader";
import Websites from "../components/OnTheSide/Websites";
import classes from "../components/OnTheSide/Websites.module.scss";

const tournio = () => {
  return (
    <Layout>
      <Row>
        <Col>
          <PageHeader/>
        </Col>
      </Row>

      <Row>
        <Col>
          <Websites/>
        </Col>
      </Row>

    </Layout>
  );
};

export default tournio;
