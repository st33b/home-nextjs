import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "@/components/Layout/Layout";
import Websites from "../components/OnTheSide/Websites";

const Page = () => {
  return (
    <>
      <Row>
        <Col>
          <Websites/>
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
