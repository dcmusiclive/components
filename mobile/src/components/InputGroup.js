import {FormControl, HStack} from 'native-base';
import React from 'react';
import {Text} from './Typography';

export const InputGroup = ({Input, label, helper, ...rest}) => (
  <FormControl {...rest}>
    <FormControl.Label>
      <HStack w="100%" display="flex" justifyContent="space-between">
        <Text color="silver.300">{label}</Text>
        <Text color="silver.300"> {helper}</Text>
      </HStack>
    </FormControl.Label>
    {Input}
  </FormControl>
);
