import React from "react";
import { Pressable as NBPressable } from "native-base";

export const Pressable = (props) => (
  <NBPressable style={{ cursor: "pointer", userSelect: "none" }} {...props} />
);
