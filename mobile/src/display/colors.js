import React from 'react';
import {
  Heading,
  Text,
  Code,
  Box,
  HStack,
  SimpleGrid,
  VStack,
} from '../components';

export const DisplayColors = ({colors, theme}) => (
  <>
    <Heading>Colors</Heading>
    <SimpleGrid columns={1} spacingX={40} spacingY={20} mt={5}>
      {Object.keys(colors).map(color => (
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
  </>
);
