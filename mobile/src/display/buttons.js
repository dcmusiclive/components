import React from 'react';
import {useColorModeValue} from '../hooks';
import {Button, Heading, IconOutline, VStack, ScrollView} from '../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const DisplayButtons = () => {
  const colorScheme = useColorModeValue('offBlack', 'offWhite');

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
              name="google"
              color="dcRed.400"
              as={MaterialCommunityIcons}
            />
          }>
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
              name="twitter"
              color="usaBlue.400"
              as={MaterialCommunityIcons}
            />
          }>
          Open button with icon
        </Button>
        <Button colorScheme={colorScheme}>Solid button</Button>
      </VStack>
    </ScrollView>
  );
};
