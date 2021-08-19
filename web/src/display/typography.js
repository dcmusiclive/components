import React from "react";
import { VStack } from "native-base";
import { Heading, Text } from "../components";

export const DisplayTypographyHeadings = () => (
  <VStack alignSelf={{ base: "center", md: "flex-start" }} p={10}>
    <Heading color="usaBlue.400" marginTop={5} marginBottom={3}>
      Typography Headings
    </Heading>
    {["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"].map((size) => (
      <Heading key={size} size={size}>
        Heading ({size})
      </Heading>
    ))}
  </VStack>
);

export const DisplayTypographyText = () => (
  <VStack alignSelf={{ base: "center", md: "flex-start" }} p={10}>
    <Heading color="usaBlue.400" marginTop={5} marginBottom={3}>
      Typography Text
    </Heading>
    {["6xl", "5xl", "4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"].map(
      (size) => (
        <Text key={size} fontSize={size}>
          Text ({size})
        </Text>
      )
    )}
    <Heading color="usaBlue.400" marginTop={10} marginBottom={3}>
      Typography Text Overrides
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
