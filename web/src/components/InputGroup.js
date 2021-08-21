import { FormControl, HStack } from "native-base";
import React from "react";
import { Text } from "./Typography";

export const InputGroup = ({ Input, label, helper, ...rest }) => (
  <FormControl {...rest}>
    <FormControl.Label>
      <HStack w="100%" display="flex" justifyContent="space-between">
        <Text __dark="gray.400" __light="offBlack">
          {label}
        </Text>
        <Text __dark="gray.400" __light="offBlack">
          {helper}
        </Text>
      </HStack>
    </FormControl.Label>
    {Input}
  </FormControl>
);
