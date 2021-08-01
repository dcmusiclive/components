import React from "react";
import {
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Box,
  Text,
  Heading,
  Code,
  VStack,
  ScrollView,
  HStack,
  SimpleGrid,
} from "native-base";
import { colors, theme } from "../../../common/lib/module/index";

// Start editing here, save and see your changes.
export default function App() {
  return (
    <ScrollView _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }}>
      <Box p={20}>
        <Heading>Colors</Heading>
        <SimpleGrid columns={3} spacingX={40} spacingY={20} mt={5}>
          {Object.keys(colors).map((color) => (
            <HStack space="sm" alignItems="center" w={128} h={65} key={color}>
              <Box backgroundColor={color} h={20} w={20} />
              <VStack space="sm">
                <Code>{color}</Code>
                <Text>{colors[color]}</Text>
                <Text>{theme.colors[color]}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
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
