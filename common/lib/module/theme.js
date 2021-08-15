export const theme = {
  colors: {
    offWhite: {
      50: "#f7f5f3",
      100: "#f7f5f3",
      200: "#faf9f9",
      300: "#faf9f9",
      400: "#eeedec",
      500: "#eeedec",
      600: "#eeedec",
      700: "#eeedec",
      800: "#eeedec",
      900: "#eeedec"
    },
    offBlack: "#202122",
    dcRed: "#f72e2a",
    usaBlue: "#0091e6",
    mallGreen: "#14c337",
    orange: "#f8630e",
    yellow: "#ffe614",
    silver: "#c8c8c8"
  },
  fonts: {
    heading: "Inter",
    body: "Inter"
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  },
  components: {
    Select: {
      baseStyle: ({
        colorMode
      }) => ({
        customDropdownIconProps: {
          size: 5,
          mr: 4
        },
        _actionSheetContent: {},
        borderWidth: 1,
        borderColor: colorMode === "dark" ? "#d8d8d8" : "#c8c8c8",
        color: colorMode === "dark" ? "#d8d8d8" : "#202122"
      }),
      variants: {},
      sizes: {}
    },
    Button: {
      defaultProps: {
        borderRadius: 20
      }
    }
  }
};
//# sourceMappingURL=theme.js.map