import Layout from "../components/Layout2022/Layout2022";
import PageHeader from "../components/PageHeader/PageHeader";
import Education from "../components/Education/Education";
import OnTheSide from "../components/OnTheSide/OnTheSide";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";

const index = () => {
  return (
    <Layout>
      <div className={'row'}>
        <div className={'col'}>
          <PageHeader/>
        </div>
      </div>

      <div className={'row'}>
        <div className={'col-12 col-sm-4'}>
          <Contact/>
          <Education/>
          <div className={'d-none d-sm-block'}>
            <OnTheSide/>
          </div>
          <Skills/>
        </div>
        <div className={'col'}>
          <Experience/>
          <div className={'d-sm-none'}>
            <OnTheSide/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
