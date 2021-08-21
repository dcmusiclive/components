import { useColorModeValue, ScrollView } from "native-base";
import React from "react";
import { Button, Heading, IconOutline, VStack } from "../components";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { useTheme } from "native-base";

export const DisplayButtons = () => {
  const colorScheme = useColorModeValue("offBlack", "offWhite");
  const theme = useTheme();

  return (
    <ScrollView p={10}>
      <Heading>Buttons</Heading>
      <VStack space={4} alignItems="center" mt={10}>
        <Button colorScheme={colorScheme} variant="outline">
          Open button
        </Button>
        <Button
          colorScheme={colorScheme}
          variant="outline"
          startIcon={
            <IconOutline
              web={<Google width={20} color={theme.colors.dcRed[400]} />}
              color="dcRed.400"
            />
          }
        >
          Open button with icon
        </Button>
        <Button colorScheme={colorScheme}>Solid button</Button>
      </VStack>

      <VStack space={4} mt={10} px={10}>
        <Button colorScheme={colorScheme} variant="outline">
          Open button
        </Button>
        <Button
          colorScheme={colorScheme}
          variant="outline"
          startIcon={
            <IconOutline
              web={<Twitter width={20} color={theme.colors.usaBlue[400]} />}
              color="usaBlue.400"
            />
          }
        >
          Open button with icon
        </Button>
        <Button colorScheme={colorScheme}>Solid button</Button>
      </VStack>
    </ScrollView>
  );
};
