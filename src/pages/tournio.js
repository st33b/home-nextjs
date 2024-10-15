import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/Layout2022/Layout2022";
import PageHeader from "../components/PageHeader/PageHeader";
import Tournio from "../components/OnTheSide/Tournio";

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
          <Tournio/>
        </Col>
      </Row>

    </Layout>
  );
};

export default tournio;
