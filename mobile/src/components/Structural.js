import React from 'react';
import {
  Box as NBBox,
  HStack as NBHStack,
  SimpleGrid as NBSimpleGrid,
  ScrollView as NBScrollView,
  VStack as NBVStack,
} from 'native-base';

export const Box = props => <NBBox {...props} />;

export const HStack = props => <NBHStack {...props} />;

export const ScrollView = props => <NBScrollView {...props} />;

export const SimpleGrid = props => <NBSimpleGrid {...props} />;

export const VStack = props => <NBVStack {...props} />;
