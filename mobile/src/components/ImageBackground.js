import React from 'react';
import {ImageBackground as RNImageBackground} from 'react-native';
import {api} from '../constants';
import {VStack} from '.';

export const ImageBackground = ({
  imageParam,
  imageOpacity = '0.5',
  backgroundStyle,
  VStackStyle,
  ...rest
}) => (
  <RNImageBackground
    source={{uri: api.endpoint.image(imageParam)}}
    resizeMode="cover"
    style={{
      backgroundColor: '#000000',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      ...backgroundStyle,
    }}
    imageStyle={{
      opacity: imageOpacity,
    }}>
    <VStack
      alignSelf={{
        base: 'center',
      }}
      style={VStackStyle}
      {...rest}
    />
  </RNImageBackground>
);
