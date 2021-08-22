import React from 'react';
import {
  Heading,
  Text,
  Code,
  Box,
  VStack,
  HStack,
  ScrollView,
} from '../components';

const renderSwatch = ({colorName, swatchOrSwatches}) => {
  return (
    <Box
      backgroundColor={colorName !== 'none' ? colorName : 'offWhite.400'}
      key={colorName}
      p={5}
      w={180}
      h={180}
      borderRadius="md">
      <Text>{colorName}</Text>
      <Code>{swatchOrSwatches}</Code>
    </Box>
  );
};

const renderSwatches = ({colorName, swatchOrSwatches}) => {
  return (
    <VStack>
      <Text mt={10}>{colorName}</Text>
      <HStack space={3}>
        {Object.entries(swatchOrSwatches).map(([key, value]) => {
          return renderSwatch({
            colorName: `${colorName}.${key}`,
            swatchOrSwatches: value,
          });
        })}
      </HStack>
    </VStack>
  );
};

const renderAllSwatches = ({themeColors}) => {
  const swatches = [];
  for (const [colorName, swatchOrSwatches] of Object.entries(themeColors)) {
    if (typeof swatchOrSwatches === 'string') {
      swatches.push(renderSwatch({colorName, swatchOrSwatches}));
    } else {
      swatches.push(renderSwatches({colorName, swatchOrSwatches}));
    }
  }
  return swatches;
};

export const DisplayColors = ({theme}) => {
  return (
    <ScrollView overflowX="scroll" p={10}>
      <Heading>Colors</Heading>
      {renderAllSwatches({themeColors: theme.colors})}
    </ScrollView>
  );
};
