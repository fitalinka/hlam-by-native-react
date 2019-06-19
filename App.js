import React from 'react';
import { Font, AppLoading } from 'expo';
import {Text, StyleSheet, View, StatusBar } from 'react-native';
import  {StyleProvider } from 'native-base';

import getTheme from './assets/native-base-theme/components';
import hlamTheme from './assets/native-base-theme/variables/hlamTheme.js';

import Enter from './screens/enter';

export default class App extends React.Component {

  constructor(props) {
    super(props);
      this.state={
        
      };
  }
	
  render() {
    
    return (
      <StyleProvider style={getTheme(hlamTheme)}>
        <Enter />
      </StyleProvider>
    )
  
}

  
}

const styles = StyleSheet.create({
  container: {},
});
