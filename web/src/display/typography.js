import { VStack, Heading, Text } from "native-base";

export function DisplayTypography({}) {
  return (
    <VStack
      alignSelf={{
        base: "center",
        md: "flex-start",
      }}
    >
      <Heading color="usaBlue" marginTop={10}>
        Headings
      </Heading>
      <Heading size="4xl">(4xl) Heading</Heading>
      <Heading size="3xl">(3xl) Heading</Heading>
      <Heading size="2xl">(2xl) Heading</Heading>
      <Heading size="xl">(xl) Heading</Heading>
      <Heading size="lg">(lg) Heading</Heading>
      <Heading size="md">(md) Heading </Heading>
      <Heading size="sm">(sm) Heading </Heading>
      <Heading size="xs">(xs) Heading </Heading>
      <Heading color="usaBlue" marginTop={10}>
        Text
      </Heading>
      <Text fontSize="6xl">6 Extra Large</Text>
      <Text fontSize="5xl">5 Extra Large</Text>
      <Text fontSize="4xl">4 Extra Large</Text>
      <Text fontSize="3xl">3 Extra Large</Text>
      <Text fontSize="2xl">2 Extra Large</Text>
      <Text fontSize="xl">Extra Large</Text>
      <Text fontSize="lg">Large</Text>
      <Text fontSize="md">Medium</Text>
      <Text fontSize="sm">Small</Text>
      <Text fontSize="xs">Extra Small</Text>
      <Heading color="usaBlue" marginTop={10}>
        Text Overrides
      </Heading>
      <Text bold>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text>
        H<Text sub>2</Text>O
      </Text>
      <Text underline>Underline</Text>
      <Text strikeThrough>StrikeThrough</Text>
      <Text bold italic underline>
        Bold, Italic & Underline
      </Text>
    </VStack>
  );
}
