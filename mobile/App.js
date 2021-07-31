/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider, Button} from 'components';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider>
      <SafeAreaView>
        <Button>Hello</Button>
        <Button>Nameer</Button>
        <Button>What's Up?</Button>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
