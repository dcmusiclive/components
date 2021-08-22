import React from "react";
import { HStack, Pill, Pressable } from "../components";

export const PillTray = ({ pills, activePill, toggleActivePill }) => (
  <HStack alignItems="flex-start" display="flex" flexWrap="wrap" space={2} mb>
    {pills.map((pill) => (
      <Pressable onPress={() => toggleActivePill(pill.text)} key={pill.text}>
        <Pill
          mb={2}
          variant="solid"
          baseColor="offWhite.400"
          activeColor={pill.activeColor}
          isActive={activePill.indexOf(pill.text) > -1}
        >
          {pill.text}
        </Pill>
      </Pressable>
    ))}
  </HStack>
);
