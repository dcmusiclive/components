import React from 'react';
import {Image} from 'native-base';

export const ImageLogo1 = props => (
  <Image
    source={{
      uri: 'https://api.dcmusic.live/image?asset=DC%20Music%20Live-04',
    }}
    alt="DC Music Live logo"
    elevation={4}
    width={100}
    height={100}
    style={{
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
    }}
    {...props}
  />
);
