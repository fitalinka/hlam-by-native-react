import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  {Container, Content, StyleProvider } from 'native-base';

import HeaderSearchComponent from '../components/HeaderSearchComponent.js'
import FooterComponent from '../components/FooterComponent.js'
import BodyComponent from '../components/BodyComponent.js'
import CategoryTab  from '../components/CategoryTab.js'


export default class StartScreen extends React.Component {

  render() {
    return (
  
      <Container>
        
        <HeaderSearchComponent />
        <BodyComponent />
        <FooterComponent />
        
             
      </Container>
    
    )
  }

  }

