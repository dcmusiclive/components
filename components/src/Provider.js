import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

export const Provider = (props) => (
  <NativeBaseProvider theme={theme} {...props} />
);
