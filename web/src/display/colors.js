import { Box, Text, Code, VStack, HStack, SimpleGrid } from "native-base";

export function DisplayColors({ colors, theme }) {
  return (
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
  );
}
