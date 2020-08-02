import React from "react";
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  const [pageName, setPageName] = React.useState();

  React.useEffect(() => {
    if (pageName !== document.title) {
      console.log("track " + document.title);
    }
    setPageName(document.title);
  });
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;