import React from "react";
import { ScrollView } from "native-base";
import { Heading, InputGroup, Select, ShowCard } from "../components";

export const DisplayShowCard = () => {
  const sampleEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "The Adventures of Kira and Morrison",
    startDate: "2025-07-21T19:00-05:00",
    endDate: "2025-07-21T23:00-05:00",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "VirtualLocation",
        url: "https://operaonline.stream5.com/",
      },
      {
        "@type": "Place",
        name: "Snickerpark Stadium",
        address: {
          "@type": "PostalAddress",
          streetAddress: "100 West Snickerpark Dr",
          addressLocality: "Snickertown",
          postalCode: "19019",
          addressRegion: "PA",
          addressCountry: "US",
        },
      },
    ],
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    description:
      "The Adventures of Kira and Morrison is coming to Snickertown in a can't miss performance.",
    offers: {
      "@type": "Offer",
      url: "https://www.example.com/event_offer/12345_201803180430",
      price: "30",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-21T12:00",
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Kira and Morrison",
    },
    organizer: {
      "@type": "Organization",
      name: "Songbyrd Music House",
      url: "https://kiraandmorrisonmusic.com",
    },
  };
  return (
    <ScrollView p={10}>
      <Heading mb={5}>Show Card</Heading>
      <ShowCard {...sampleEvent} />
    </ScrollView>
  );
};
