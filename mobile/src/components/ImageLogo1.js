import React from 'react';
import {api} from '../constants';
import {Image} from 'native-base';

export const ImageLogo1 = ({width = 100, height = 100, style, ...props}) => (
  <Image
    source={{uri: api.endpoint.image({asset: 'DC Music Live-04'})}}
    alt="DC Music Live logo"
    elevation={4}
    width={width}
    height={height}
    style={{
      shadowColor: '#000',
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      shadowOffset: {width: 0, height: 2},
      ...style,
    }}
    {...props}
  />
);
