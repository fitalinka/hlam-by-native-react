import React, { Component } from 'react';
import { Content } from 'native-base';
import {StyleSheet, View, ScrollView} from 'react-native';

import CardElement from './CardElement';
import CategoryTab from './CategoryTab.js'
import FooterComponent from './FooterComponent.js'


export default class BodyComponent extends Component {
  render() {
    return (
    	<Content >
      	<CategoryTab />
      	<ScrollView>
      			<CardElement />
      			<CardElement />
      	</ScrollView>
    	</Content>
      
    )
  }
}
const styles = StyleSheet.create({
  categoryTab: {
  },
  
});