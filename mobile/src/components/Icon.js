import React from 'react';
import {Box, Icon, IconButton as RNIconButton} from 'native-base';

export const IconOutline = ({as, name, size = 4, color, web}) => (
  <Box
    border={2}
    borderRadius={150}
    borderColor={color}
    p={1}
    borderWidth={2.5}>
    {web || <Icon as={as} name={name} size={size} color={color} />}
  </Box>
);

export const IconButton = props => <RNIconButton {...props} />;
