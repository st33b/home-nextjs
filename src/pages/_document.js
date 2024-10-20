import {Html, Head, Main, NextScript} from "next/document";

export default function Document () {
  return (
    <Html lang={'en'}>
      <Head>
        <link
          href={'https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap'}
          rel={'stylesheet'}/>
        <link
          href={'https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap'}
          rel={'stylesheet'}/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
