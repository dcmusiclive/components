import React from "react";
import { Box, Text, Heading, HStack, VStack, Pressable } from "native-base";
import { Pill } from "./Pill";

export const ShowCard = ({
  name,
  startDate,
  eventStatus,
  location,
  image,
  offers,
  organizer,
}) => {
  const date = new Date(startDate);
  const localeString = date.toLocaleString();

  const time = localeString.split(",")[1].split(" ");
  const displayTime = `${time[1].slice(0, time[1].length - 3)} ${time[2]}`;

  const dayOfTheWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const displayDate = `${dayOfTheWeek}, ${month}/${day}`;

  const MutedText = (props) => (
    <Text
      _dark={{ color: "offWhite.500" }}
      _light={{ color: "silver.500" }}
      {...props}
    />
  );

  return (
    <Box
      _dark={{ borderColor: "offWhite.50" }}
      _light={{ borderColor: "silver.700" }}
      borderWidth={2}
      padding={4}
      maxWidth="600px"
      height="220px"
    >
      <VStack justifyContent="space-between" height="100%">
        <VStack space={3}>
          <HStack justifyContent="space-between">
            <Heading size="sm" fontWeight={900}>
              {displayDate}
            </Heading>
            <MutedText fontSize="md">${offers.price}</MutedText>
          </HStack>
          <MutedText fontSize="md">{displayTime}</MutedText>
          <Heading size="md" fontWeight={900}>
            {name}
          </Heading>
        </VStack>
        <HStack
          alignSelf="flex-end"
          display="flex"
          flexWrap="wrap"
          space={4}
          alignItems="center"
        >
          <Pill baseColor="orange.400">{organizer.name}</Pill>

          <Pressable cursor="pointer" borderBottomColor="white">
            <Text fontWeight={600} fontSize="sm">
              + SAVE SHOW
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};
