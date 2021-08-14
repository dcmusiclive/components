import React from 'react';
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
  extendTheme,
  NativeBaseProvider,
} from 'native-base';
import {theme, colors} from 'common';
import {SafeAreaView} from 'react-native';
import {DisplayBackground} from './src/display';

export default function App() {
  const Theme = extendTheme(theme);
  return (
    <NativeBaseProvider theme={Theme}>
      {/* <ScrollView _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}}>
        <SafeAreaView>
          <Heading>Background</Heading> */}
      <DisplayBackground />
      {/* <Heading>Colors</Heading>
            <SimpleGrid columns={1} spacingX={40} spacingY={20} mt={5}>
              {Object.keys(colors).map(color => (
                <HStack
                  space="sm"
                  alignItems="center"
                  w={128}
                  h={65}
                  key={color}>
                  <Box backgroundColor={color} h={20} w={20} />
                  <VStack space="sm">
                    <Code>{color}</Code>
                    <Text>{colors[color]}</Text>
                    <Text>{theme.colors[color]}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid> */}
      {/* </SafeAreaView> */}
      <ColorModeSwitch />
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ColorModeSwitch() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Tooltip
      label={colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}>
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
