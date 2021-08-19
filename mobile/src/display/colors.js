import React from 'react';
import {Heading, Text, Code, Box, VStack} from '../components';

const renderSwatch = ({colorName, swatchOrSwatches}) => {
  return (
    <Box backgroundColor={colorName} key={colorName} p={5}>
      <Text>{colorName}</Text>
      <Code>{swatchOrSwatches}</Code>
    </Box>
  );
};

const renderSwatches = ({colorName, swatchOrSwatches}) => {
  return (
    <VStack>
      <Text>{colorName}</Text>
      <VStack>
        {Object.entries(swatchOrSwatches).map(([key, value]) => {
          console.log(`${colorName}.${key}`);
          return renderSwatch({
            colorName: `${colorName}.${key}`,
            swatchOrSwatches: value,
          });
        })}
      </VStack>
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

export const DisplayColors = ({colors, theme}) => {
  return (
    <>
      <Heading>Colors</Heading>
      {renderAllSwatches({themeColors: theme.colors})}
    </>
  );
};
