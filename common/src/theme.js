export const theme = {
  colors: {
    offWhite: "#f7f5f3",
    offBlack: "#202122",
    dcRed: "#f72e2a",
    usaBlue: "#0091e6",
    mallGreen: "#14c337",
    orange: "#f8630e",
    yellow: "#ffe614",
    silver: "#c8c8c8",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  components: {
    Select: {
      baseStyle: ({ colorMode }) => ({
        customDropdownIconProps: {
          size: 5,
          mr: 4,
        },
        _actionSheetContent: {},
        borderWidth: 1,
        borderColor: colorMode === "dark" ? "#d8d8d8" : "#c8c8c8",
        color: colorMode === "dark" ? "#d8d8d8" : "#202122",
      }),
      variants: {},
      sizes: {},
    },
  },
};
