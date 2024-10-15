import Layout from "@/components/Layout/Layout";
import Education from "@/components/Education/Education";
import OnTheSide from "@/components/OnTheSide/OnTheSide";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

const Page = () => {
  return (
    <>
      <div className={`d-none d-sm-block mx-auto my-3 p-2 w-75 text-center border border-dark-subtle rounded`}>
        {/*
        Seeking an individual contributor role with a mission-driven organization, where I will have the opportunity
        to grow and stretch my skills as an architect, developer, mentor, and human being.
        */}
        I am on long-term disability. While I hope to eventually return to work, for the time being, I am focused on my
        health and am not open to new opportunities.
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
