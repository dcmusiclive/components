import React from 'react';
import {Header, Heading, ScrollView} from '../components';

export const DisplayHeader = () => {
  return (
    <ScrollView p={5}>
      <Heading>Header</Heading>
      <Header />
    </ScrollView>
  );
};
