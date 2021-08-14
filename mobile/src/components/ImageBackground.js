import React from 'react';
import {ImageBackground as RNImageBackground} from 'react-native';
import {VStack} from 'native-base';

export const ImageBackground = ({image, ...rest}) => (
  <RNImageBackground
    source={image}
    resizeMode="cover"
    opacity={0.6}
    style={{
      backgroundColor: '#000000',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }}>
    <VStack alignSelf={{base: 'center'}} {...rest} />
  </RNImageBackground>
);
