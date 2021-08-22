import React from 'react';
import {ScrollView} from 'native-base';
import {Heading, InputGroup, Select} from '../components';

export const DisplaySelect = () => {
  const states = ['Washington DC', 'Virginia', 'Maryland'];
  return (
    <ScrollView p={5}>
      <Heading mb={5}>Select</Heading>
      <InputGroup
        label="What state do you live in?"
        helper="DMV love and beyond!"
        Input={
          <Select selectedValue="Washington DC">
            {states.map(v => (
              <Select.Item key={v} label={v} value={v} />
            ))}
          </Select>
        }
      />
    </ScrollView>
  );
};
