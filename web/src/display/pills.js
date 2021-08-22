import React, { useState } from "react";
import {
  Heading,
  VStack,
  Code,
  Pill,
  Pressable,
  ScrollView,
} from "../components";
import { usePillTray } from "../hooks";

export const DisplayPills = () => {
  const genres = [
    { text: "Hip-Hop", activeColor: "dcRed.400" },
    { text: "Jazz", activeColor: "usaBlue.400" },
    { text: "Go-Go", activeColor: "mallGreen.400" },
    { text: "Dance/House", activeColor: "yellow.400" },
    { text: "Rock", activeColor: "orange.400" },
    { text: "Americana", activeColor: "pink.400" },
  ];

  const { activePills, renderPillTray } = usePillTray({ pills: genres });
  const [viewAllFilters, setViewAllFilters] = useState(false);

  return (
    <ScrollView p={10}>
      <Heading mb={5}>Pills</Heading>
      <Heading size="md" my={4}>
        Pill Tray
      </Heading>
      {renderPillTray()}
      <Code my={2}>{JSON.stringify(activePills, null, 2)}</Code>
      <Heading size="md" my={4}>
        Open Pill
      </Heading>
      <VStack alignItems="flex-start" space={4}>
        <Pressable onPress={() => setViewAllFilters(!viewAllFilters)}>
          <Pill variant="outline" isActive={viewAllFilters}>
            View All Filters
          </Pill>
        </Pressable>
        <Pressable onPress={() => setViewAllFilters(!viewAllFilters)}>
          <Pill variant="outline" isActive={viewAllFilters}>
            More...
          </Pill>
        </Pressable>
      </VStack>
    </ScrollView>
  );
};
