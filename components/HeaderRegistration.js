import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,  } from 'native-base';
import { StyleSheet,Image, StatusBar, View, Text } from 'react-native';

export default class HeaderRegistration extends Component {
  render() {
    return (
      
        <Header>
          <Left style={{flex:1}}>
           <Button transparent>
           
              <Icon name='ios-arrow-back' style={{margin:0,fontSize:45}}/>
              <Text style={{ paddingTop:2, color:'#fff' }}> Назад </Text>
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize:16}}>Регистрация</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color:'#fff' }}>Отмена</Text>
            </Button>
          </Right>
        </Header>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#26BCFE',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'space-between',
    
    
  },
  
  
});