import Container from "react-bootstrap/Container";

import SiteHeader from '../SiteHeader';
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import {ThemeContextProvider} from "@/js/ThemeContext";
import classes from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <ThemeContextProvider>
      <SiteHeader/>

      <Container className={classes.Container} fluid={'lg'}>
        <PageHeader/>
        <main>
          {children}
        </main>

        <Footer/>
      </Container>
    </ThemeContextProvider>
  );
}

export default Layout;
