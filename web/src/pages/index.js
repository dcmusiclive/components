import React, { useState } from "react";
import {
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Box,
  Heading,
  ScrollView,
  Select,
} from "native-base";
import { colors, theme } from "../../../common/lib/module/index";
import { DisplayColors, DisplayTypography } from "../display";

// Start editing here, save and see your changes.
export default function App() {
  const [display, setDisplay] = useState("Colors");
  return (
    <ScrollView _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
      <Box p={20}>
        <Select
          width={500}
          marginBottom={8}
          selectedValue={display}
          onValueChange={(itemValue) => setDisplay(itemValue)}
        >
          <Select.Item label="Colors" value="Colors" />
          <Select.Item label="Typography" value="Typography" />
        </Select>
        <Heading marginBottom={5}>{display}</Heading>
        {display === "Colors" && (
          <DisplayColors colors={colors} theme={theme} />
        )}
        {display === "Typography" && <DisplayTypography />}
      </Box>
      <ColorModeSwitch />
    </ScrollView>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
