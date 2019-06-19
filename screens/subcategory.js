import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  {Container, Content, StyleProvider } from 'native-base';

import HeaderCategory from '../components/HeaderCategory.js'
import FooterComponent from '../components/FooterComponent.js'
import SubcategoriesList from '../components/SubcategoriesList.js'


export default class Subcategory extends React.Component {

  render() {
    return (
  
      <Container>
        
        <HeaderCategory />
        <SubcategoriesList />
        <FooterComponent />
        
             
      </Container>
    
    )
  }

  }

