import React from 'react';
import {ImageBackground as RNImageBackground} from 'react-native';
import {api} from '../constants';
import {VStack} from './Structural';

export const ImageBackground = ({imageParam, ...rest}) => (
  <RNImageBackground
    source={{uri: api.endpoint.image(imageParam)}}
    resizeMode="cover"
    imageStyle={{opacity: 0.5}}
    style={{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      backgroundColor: '#000000',
    }}>
    <VStack alignSelf={{base: 'center'}} {...rest} />
  </RNImageBackground>
);
