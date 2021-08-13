import * as React from "react";
import Head from "next/head";
import { NativeBaseProvider, extendTheme } from "native-base";
import { theme } from "../../../common/lib/module/index";

function MyApp({ Component, pageProps }) {
  const Theme = extendTheme(theme);

  return (
    <>
      <Head>
        <title>DCM Components</title>
        <meta name="description" content="DCM Components on the web" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NativeBaseProvider theme={Theme}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default MyApp;
