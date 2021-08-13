import { VStack, Heading, Box } from "native-base";
import { ImageBackground } from "react-native";

export function DisplayBackground({}) {
  const image = { uri: "https://api.dcmusic.live/image?asset=farrah-01" };
  return (
    <VStack
      alignSelf={{
        base: "center",
      }}
      width="100%"
      height={800}
      borderWidth={2}
      borderColor="offWhite"
    >
      <Box bg="offWhite" p={30} color="offBlack">
        <pre>
          <code>
            {`
import { ImageBackground } from "react-native";

const image = { uri: "https://api.dcmusic.live/image?asset=farrah-01" };

<ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
<Heading color="dcRed" p={100} textAlign="center">
  Content
</Heading>
</ImageBackground>
`}
          </code>
        </pre>
      </Box>
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <Heading color="dcRed" p={100} textAlign="center">
          Content
        </Heading>
      </ImageBackground>
    </VStack>
  );
}
