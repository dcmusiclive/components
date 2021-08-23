import React from 'react';
import {Button, Heading, ScrollView, CTABlock, Text} from '../components';

export const DisplayCTABlock = () => {
  return (
    <ScrollView p={5}>
      <Heading>CTA Block</Heading>
      <CTABlock
        imageParam={{asset: 'farrah-02'}}
        buttons={[
          <Button colorScheme="offWhite" bg="offWhite.50">
            <Text fontWeight={400} color="offBlack.50">
              See Latest Release Notes
            </Text>
          </Button>,
          <Button colorScheme="offWhite" bg="offWhite.50">
            <Text fontWeight={400} color="offBlack.50">
              Read Our Blog
            </Text>
          </Button>,
          <Button colorScheme="offWhite" bg="offWhite.50">
            <Text fontWeight={400} color="offBlack.50">
              Contact Our Team
            </Text>
          </Button>,
        ]}
      />
    </ScrollView>
  );
};
