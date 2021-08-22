import React from 'react';
import {ImageBackground as RNImageBackground} from 'react-native';
import {VStack} from '../components';

export const ImageBackground = ({image, ...rest}) => (
  <RNImageBackground
    source={image}
    resizeMode="cover"
    style={{
      backgroundColor: '#000000',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }}
    imageStyle={{
      opacity: 0.5,
    }}>
    <VStack alignSelf={{base: 'center'}} {...rest} />
  </RNImageBackground>
);
