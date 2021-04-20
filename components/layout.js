import React from 'react';
import Container from "react-bootstrap/Container";

import SiteHeader from './siteHeader';
import SiteFooter from './siteFooter';
import PageHeader from './pageHeader';

import styles from './layout.module.scss';

const layout = ({children}) => {
  return (
    <>
      <SiteHeader/>
      
      <Container className={styles.Container}>
        <PageHeader />
      </Container>

      <Container className={styles.Container}>
        <main>
          {children}
        </main>
      </Container>

      {/*<Container className={styles.Container}>*/}
      {/*  <SiteFooter/>*/}
      {/*</Container>*/}
    </>
  )
    ;
}

export default layout;
