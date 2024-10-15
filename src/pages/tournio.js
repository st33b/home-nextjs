import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "@/components/Layout/Layout";
import Tournio from "@/components/OnTheSide/Tournio";

const Page = () => {
  return (
    <>
      <Row>
        <Col>
          <Tournio/>
        </Col>
      </Row>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Page;
