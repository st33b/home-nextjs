import Container from "react-bootstrap/Container";

import SiteHeader from '../SiteHeader';
import Footer from "./Footer";

import classes from './Layout2022.module.scss'

const LayoutComponent = ({children}) => {
  return (
    <>
      <SiteHeader/>

      <Container className={classes.Container} fluid={'lg'}>
        <main>
          {children}
        </main>

        <Footer/>
      </Container>
    </>
  );
}

export default LayoutComponent;
