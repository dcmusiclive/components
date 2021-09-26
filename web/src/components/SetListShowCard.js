import React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  Pressable,
  Link,
} from "native-base";
import { Pill } from "./Pill";

export const SetListShowCard = ({
  id,
  title,
  niceDate: displayDate,
  time,
  status,
  nicePrice,
  venueName,
  eventLink,
  ticketLink,
  color = "orange.400",
  ...rest
}) => {
  const ticketsOrInfo = ticketLink ? "tickets" : "info";
  const MutedText = (props) => (
    <Text
      _dark={{ color: "offWhite.500" }}
      _light={{ color: "silver.600" }}
      {...props}
    />
  );

  return (
    <>
      <div id={id} style={{ width: "400px" }}>
        <Box
          _dark={{ borderColor: "offWhite.50" }}
          _light={{ borderColor: color }}
          borderWidth={2}
          padding={4}
          maxWidth="400px"
          height="180px"
          {...rest}
        >
          <VStack justifyContent="space-between" height="100%">
            <VStack space={3}>
              <HStack justifyContent="space-between">
                <Heading size="sm" fontWeight={900}>
                  {displayDate}
                </Heading>
                <MutedText fontSize="md">{nicePrice}</MutedText>
              </HStack>
              <MutedText fontSize="md">{time}</MutedText>
              <Heading size="md" fontWeight={900} isTruncated={true}>
                {title}
              </Heading>
            </VStack>
            <HStack
              alignSelf="flex-end"
              display="flex"
              flexWrap="wrap"
              space={3}
              maxHeight={10}
              overflowX="scroll"
              alignItems="center"
            >
              <Pill baseColor={color}>{venueName}</Pill>
              {/* {status.map((s) => (
              <Pill baseColor="silver.400">{s}</Pill>
            ))} */}
            </HStack>
          </VStack>
        </Box>
      </div>
      <Link href={ticketLink || eventLink} isUnderlined={true} mt={2}>
        {title} {time} {ticketsOrInfo}
      </Link>
      <br />
    </>
  );
};
