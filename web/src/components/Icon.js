import React from "react";
import { Box, Icon, IconButton as RNIconButton } from "native-base";
import { Google as GoogleIcon } from "@styled-icons/boxicons-logos/Google";
import { Twitter as TwitterIcon } from "@styled-icons/boxicons-logos/Twitter";

export const IconOutline = ({ as, name, size = 4, color, web }) => (
  <Box
    border={2}
    borderRadius={150}
    borderColor={color}
    p={1}
    borderWidth={2.5}
  >
    {web || <Icon as={as} name={name} size={size} color={color} />}
  </Box>
);

export const IconButton = (props) => <RNIconButton {...props} />;

export const Google = GoogleIcon;
export const Twitter = TwitterIcon;
