import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layouts/Layout2022/Layout2022";
import PageHeader from "../components/2022/PageHeader/PageHeader";
import Tournio from "../components/2022/OnTheSide/Tournio";

import styles from '../styles/index.module.scss'

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
