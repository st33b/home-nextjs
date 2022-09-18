import Container from "react-bootstrap/Container";

import SiteHeader from '../../2022/SiteHeader';
import Footer from "./Footer";

import classes from './Layout2022.module.scss'

const LayoutComponent = ({children}) => {
  return (
    <>
      <SiteHeader/>

      <Container className={classes.Container}>
        <main>
          {children}
        </main>

        <Footer/>
      </Container>
    </>
  );
}

export default LayoutComponent;
