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
    offBlack: {
      50: "#202122",
      100: "#202122",
      200: "#202122",
      300: "#202122",
      400: "#202122",
      500: "#202122",
      600: "#202122",
      700: "#202122",
      800: "#202122",
      900: "#202122"
    },
    dcRed: {
      50: "#ffe3e2",
      100: "#ffb5b3",
      200: "#fc8583",
      300: "#fa5552",
      400: "#f72e2a",
      500: "#dd0c08",
      600: "#ad0705",
      700: "#7c0303",
      800: "#4d0000",
      900: "#200000"
    },
    usaBlue: {
      50: "#d9f8ff",
      100: "#ace4ff",
      200: "#7bd0ff",
      300: "#49bdff",
      400: "#0091e6",
      500: "#0091e6",
      600: "#0071b4",
      700: "#005082",
      800: "#003051",
      900: "#001121"
    },
    mallGreen: {
      50: "#e0ffe6",
      100: "#b6f9c3",
      200: "#88f39e",
      300: "#5bee79",
      400: "#14c337",
      500: "#15d03b",
      600: "#0ba22d",
      700: "#03741f",
      800: "#004610",
      900: "#001900"
    },
    orange: {
      50: "#ffeddd",
      100: "#ffceb1",
      200: "#fdae81",
      300: "#fb8f51",
      400: "#f8630e",
      500: "#df5506",
      600: "#ae4103",
      700: "#7d2e01",
      800: "#4c1a00",
      900: "#200600"
    },
    yellow: {
      50: "#fffcda",
      100: "#fff7ad",
      200: "#fff17d",
      300: "#ffec4b",
      400: "#ffe614",
      500: "#e6cd00",
      600: "#b3a000",
      700: "#807200",
      800: "#4d4400",
      900: "#1c1700"
    },
    silver: {
      50: "#fbf0f2",
      100: "#dcd8d9",
      200: "#c8c8c8",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#282626",
      900: "#150a0d"
    }
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
      baseStyle: props => ({
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 12,
        // fixed height
        _web: {
          cursor: props.isDisabled ? "not-allowed" : props.isLoading ? "default" : "pointer"
        },
        _text: {
          fontWeight: 600
        },
        _stack: {
          space: 2,
          alignItems: "center"
        },
        _disabled: {
          opacity: 0.5
        }
      })
    }
  }
};
//# sourceMappingURL=theme.js.map