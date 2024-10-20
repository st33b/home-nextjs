import Head from "next/head";

export const siteTitle = 'Scott Stebleton';

const Component = () => {
  return (
    <Head>
      <title>{siteTitle}</title>
      {/*<link rel="icon" href="/logo-50x50.jpg" />*/}
      <meta content="text/html"
            charSet="utf-8"
            httpEquiv="Content-Type"/>
      <meta content="title"
            name="{siteTitle}"/>
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"/>
      <meta name="description"
            content="Resume for Scott Stebleton, a human being in Atlanta, Georgia"/>
      <meta name="twitter:card"
            content="summary_large_image"/>
    </Head>
  );
};

export default Component;
