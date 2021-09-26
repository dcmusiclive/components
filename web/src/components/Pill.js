import React from "react";
import { useColorMode } from "../hooks";
import { Text, Box } from "native-base";

export const Pill = ({
  baseColor = "offWhite.400",
  activeColor = "usaBlue.400",
  variant = "solid",
  isActive = false,
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      px={2.5}
      py={0}
      minHeight={5}
      maxHeight={5}
      borderRadius={12}
      borderWidth={1}
      justifyContent="center"
      borderColor={
        variant === "outline"
          ? isActive
            ? activeColor
            : colorMode === "light"
            ? "offBlack.50"
            : baseColor
          : isActive
          ? activeColor
          : baseColor
      }
      bg={
        variant === "outline"
          ? "transparent"
          : isActive
          ? activeColor
          : baseColor
      }
      {...rest}
    >
      <Text
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        color={
          variant === "outline"
            ? isActive
              ? activeColor
              : colorMode === "light"
              ? "offBlack.50"
              : baseColor
            : isActive
            ? activeColor === "yellow.400"
              ? "offBlack.50"
              : "white"
            : baseColor === "offWhite.400"
            ? "offBlack.50"
            : "white"
        }
      >
        {children}
      </Text>
    </Box>
  );
};
