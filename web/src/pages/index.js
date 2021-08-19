import React, { useState } from "react";
import { theme, colors } from "../../../common/lib/module/index";
import {
  extendTheme,
  NativeBaseProvider,
  Select,
  ScrollView,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
} from "native-base";
import { SafeAreaView } from "react-native";
import { Box } from "../components";
import {
  DisplayBackground,
  DisplayColors,
  DisplayTypographyHeadings,
  DisplayTypographyText,
  DisplayButtons,
} from "../display";

export default function App() {
  const Theme = extendTheme(theme);
  const [display, setDisplay] = useState("Colors");

  return (
    <NativeBaseProvider theme={Theme}>
      {display === "Background" ? (
        <DisplayBackground>
          <ThemeSelector display={display} setDisplay={setDisplay} />
        </DisplayBackground>
      ) : (
        <ScrollView
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
        >
          <SafeAreaView>
            <ThemeSelector display={display} setDisplay={setDisplay} />
            <Box pt={100}>
              {display === "Colors" ? (
                <DisplayColors theme={theme} colors={colors} />
              ) : display === "Typography Headings" ? (
                <DisplayTypographyHeadings />
              ) : display === "Typography Text" ? (
                <DisplayTypographyText />
              ) : display === "Buttons" ? (
                <DisplayButtons />
              ) : null}
            </Box>
          </SafeAreaView>
        </ScrollView>
      )}
      <ThemeColorModeSwitch />
    </NativeBaseProvider>
  );
}

const ThemeSelector = ({ display, setDisplay }) => (
  <Select
    position="absolute"
    width={300}
    top={50}
    left={5}
    zIndex={10}
    marginBottom={8}
    selectedValue={display}
    onValueChange={(itemValue) => setDisplay(itemValue)}
  >
    {[
      "Background",
      "Colors",
      "Typography Headings",
      "Typography Text",
      "Buttons",
    ].map((v) => (
      <Select.Item key={v} label={v} value={v} />
    ))}
  </Select>
);

function ThemeColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      openDelay={300}
      closeOnClick={false}
      placement="bottom right"
      label={colorMode === "dark" ? "Enable light mode." : "Enable dark mode."}
    >
      <IconButton
        position="absolute"
        top={12}
        right={5}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
