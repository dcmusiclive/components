import React from 'react';
import {View} from 'react-native';
import {ImageBackground, ImageLogo1} from '../components';

export const DisplayBackground = ({children}) => (
  <View style={{flex: 1}}>
    {children}
    <ImageBackground
      image={{uri: 'https://api.dcmusic.live/image?asset=farrah-01'}}>
      <ImageLogo1 />
    </ImageBackground>
  </View>
);
