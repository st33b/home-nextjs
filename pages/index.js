import Layout from '../components/layout';

import Navigation from '../components/navigation';
import BLM from '../components/blm';
import Contact from '../components/contact';
import Omada from '../components/omada';
import Lumos from '../components/lumos';
import MFP from '../components/mfp';
import Beatport from '../components/beatport';
import Cloudmark from '../components/cloudmark';

import styles from '../styles/index.module.scss'

const index = () => {
  return (
    <Layout>

      <div className={styles.Home}>

        <BLM />

        <Contact />

        {/*<h2 className={styles.SectionHeader}>*/}
        {/*  Experience*/}
        {/*</h2>*/}

        <Navigation />

        <div className={styles.Experience}>
          <Omada />
          <Lumos />
          <MFP />
          <Beatport />
          <Cloudmark />
        </div>

      </div>

    </Layout>
  );
};

export default index;
