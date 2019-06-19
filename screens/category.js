import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  {Container, Content, StyleProvider } from 'native-base';

import HeaderCategory from '../components/HeaderCategory.js'
import FooterComponent from '../components/FooterComponent.js'
import CategoryList from '../components/CategoryList.js'


export default class Category extends React.Component {

  render() {
    return (
  
      <Container>
        
        <HeaderCategory />
        <CategoryList />
        <FooterComponent />
        
             
      </Container>
    
    )
  }

  }

