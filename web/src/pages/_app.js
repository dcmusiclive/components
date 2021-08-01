import * as React from "react";
import Head from "next/head";
import { NativeBaseProvider, extendTheme } from "native-base";
import { theme } from "../../../common/lib/module/index";

function MyApp({ Component, pageProps }) {
  const Theme = extendTheme(theme);

  return (
    <>
      <Head>
        <title>NaitveBase + NextJS Starter Kit</title>
        <meta
          name="description"
          content="NativeBase and NextJS starter kit for rapid setup and easy development experience with NativeBase."
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
