import React from "react";
import {
  Box as NBBox,
  HStack as NBHStack,
  VStack as NBVStack,
  SimpleGrid as NBSimpleGrid,
  ScrollView as NBScrollView,
} from "native-base";

export const Box = (props) => <NBBox {...props} />;
export const HStack = (props) => <NBHStack {...props} />;
export const VStack = (props) => <NBVStack {...props} />;
export const SimpleGrid = (props) => <NBSimpleGrid {...props} />;
export const ScrollView = (props) => <NBScrollView {...props} />;
export const Center = require("native-base").Center;
