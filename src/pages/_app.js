import {SSRProvider} from "react-bootstrap";
import {useEffect} from "react";
import '../styles/base_styles.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
