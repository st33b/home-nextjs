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
