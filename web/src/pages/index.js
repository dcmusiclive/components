import React, { useState } from "react";
import { theme, colors } from "../../../common/lib/module/index";
import { useColorMode } from "../hooks";
import {
  NativeBaseProvider,
  extendTheme,
  SafeAreaView,
  Box,
  IconButton,
  Select,
  ScrollView,
  SunIcon,
  MoonIcon,
} from "../components";
import {
  DisplayBackground,
  DisplayColors,
  DisplayTypographyHeadings,
  DisplayTypographyText,
  DisplayButtons,
  DisplaySelect,
  DisplayPills,
  DisplayCTABlock,
} from "../display";

const componentList = [
  "Background",
  "Colors",
  "Typography Headings",
  "Typography Text",
  "Buttons",
  "Select",
  "Pills",
  "CTA Block",
];

export default function App() {
  const Theme = extendTheme(theme);
  const [display, setDisplay] = useState("Pills");

  return (
    <NativeBaseProvider theme={Theme}>
      {display === "Background" ? (
        <DisplayBackground>
          <ThemeSelector display={display} setDisplay={setDisplay} />
        </DisplayBackground>
      ) : (
        <ScrollView _dark={{ bg: "black" }} _light={{ bg: "blueGray.50" }}>
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
              ) : display === "Select" ? (
                <DisplaySelect />
              ) : display === "Pills" ? (
                <DisplayPills />
              ) : display === "CTA Block" ? (
                <DisplayCTABlock />
              ) : null}
            </Box>
          </SafeAreaView>
          <ThemeColorModeSwitch />
        </ScrollView>
      )}
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
    {componentList.map((v) => (
      <Select.Item key={v} label={v} value={v} />
    ))}
  </Select>
);

function ThemeColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="absolute"
      top={12}
      right={5}
      onPress={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      accessibilityLabel="Color Mode Switch"
    />
  );
}
