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
      900: "#eeedec",
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
      900: "#202122",
    },
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
    Button: {
      baseStyle: (props) => ({
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 12, // fixed height
        _web: {
          cursor: props.isDisabled
            ? "not-allowed"
            : props.isLoading
            ? "default"
            : "pointer",
        },
        _text: {
          fontWeight: 600,
        },
        _stack: {
          space: 2,
          alignItems: "center",
        },
        _disabled: {
          opacity: 0.5,
        },
      }),
    },
  },
};
