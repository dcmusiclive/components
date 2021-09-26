import React, { useState } from "react";
import {
  IconButton,
  MoonIcon,
  ScrollView,
  SunIcon,
  useColorMode,
  Text,
  VStack,
  Button,
} from "native-base";
import { toPng } from "html-to-image";
import { Heading } from "../../components";
import { SetListShowCard } from "../../components/SetListShowCard";

export default function SetList({ neighborhood, neighborhoodShows, color }) {
  const [loading, setLoading] = useState(false);

  console.log({ neighborhood, neighborhoodShows });

  function replaceSetListCardsWithImages() {
    setLoading(true);

    neighborhoodShows.forEach((show) => {
      let cardNode = document.getElementById(show.id);
      toPng(cardNode)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          cardNode.replaceWith(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  return (
    <ScrollView p={10} _dark={{ bg: "black" }} _light={{ bg: "white" }}>
      <Heading mb={5}>The Set List</Heading>

      <Button my={20} onPress={() => replaceSetListCardsWithImages()}>
        {loading ? "Loading..." : "Convert Cards to Images"}
      </Button>

      <VStack space={10}>
        {neighborhoodShows ? (
          <>{renderSetListCards(neighborhoodShows, color)}</>
        ) : null}
      </VStack>
      <ThemeColorModeSwitch />
    </ScrollView>
  );
}

function renderSetListCards(shows, color) {
  return (
    <VStack space={8}>
      {shows.map((show) => {
        return (
          <SetListShowCard id={show.id} key={show.id} color={color} {...show} />
        );
      })}
    </VStack>
  );
}

function ThemeColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="absolute"
      top={12}
      right={5}
      onPress={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      accessibilityLabel="Color Mode Switch"
    />
  );
}

export async function getServerSideProps({ params: { neighborhood } }) {
  const res = await fetch(
    `https://api.dcmusic.live/event/list?version=1&neighborhoods=${neighborhood}`
  );
  const shows = await res.json();

  const filterBeforeDate = (
    neighborhood,
    dateStart = "2021-09-15",
    dateEnd = "2021-09-29"
  ) =>
    neighborhood.events.filter(
      (e) =>
        new Date(e.date) > new Date(dateStart) &&
        new Date(e.date) <= new Date(dateEnd)
    );

  const colorResolver = {
    cap: "blue.600",
    wharf: "blue.500",
    nav: "indigo.600",
    hst: "pink.500",
    uni: "rose.700",
    ivy: "green.500",
    geo: "blue.800",
    dtn: "purple.500",
  };

  return {
    props: {
      neighborhood: neighborhood,
      neighborhoodShows: filterBeforeDate(shows),
      color: colorResolver[neighborhood],
    },
  };
}
