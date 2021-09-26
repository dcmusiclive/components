import React from "react";
import { Box, VStack } from "native-base";
import { ImageBackground } from "../components";

export const CTABlock = ({ imageParam = { asset: "farrah-01" }, buttons }) => {
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        width: "80vw",
        maxWidth: "575px",
        height: "80vw",
        maxHeight: "575px",
        placeSelf: "center",
      }}
      my={10}
    >
      <ImageBackground
        backgroundStyle={{
          flex: 1,
          aspectRatio: 1,
        }}
        imageParam={imageParam}
        imageOpacity={0.8}
        VStackStyle={{
          justifyContent: "center",
          width: "100%",
          display: "flex",
          flex: 1,
        }}
      >
        <Box
          style={{
            boxSizing: "border-box",
            margin: 10,
            display: "flex",
            flexGrow: 1,
          }}
          borderColor="offWhite.50"
          borderWidth={2}
          alignItems="center"
          justifyContent="center"
        >
          <VStack space={10}>{buttons}</VStack>
        </Box>
      </ImageBackground>
    </Box>
  );
};
