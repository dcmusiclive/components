import React from 'react';
import {Text, HStack, FormControl} from '../components';

export const InputGroup = ({Input, label, helper, ...rest}) => (
  <FormControl {...rest}>
    <FormControl.Label>
      <HStack w="100%" display="flex" justifyContent="space-between">
        <Text __dark="gray.400" __light="offBlack" fontSize="xs">
          {label}
        </Text>
        <Text __dark="gray.400" __light="offBlack" fontSize="xs">
          {helper}
        </Text>
      </HStack>
    </FormControl.Label>
    {Input}
  </FormControl>
);
