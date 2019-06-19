import React, { Component } from 'react';
import { Header,Item, Input, Icon, Button, Text, Right, Left, } from 'native-base';
import { StyleSheet,Image, StatusBar } from 'react-native';


export default class HeaderSearchComponent extends Component {


  render() {
    
    return (

    	
         <Header searchBar hasTabs style={styles.container}>
         
          <Item style={styles.searchItem}>
            <Icon name="ios-search" style={{color: '#B0B0B0'}}/>
            <Input placeholder="Поиск по всем обьявлениям" placeholderTextColor={'#B0B0B0'}
            placeholderStyle={{ fontSize: 10}} />
            
            
          </Item>
          
          
            <Button>
            <Image source={require('../assets/images/microphone.svg')} style={{width:100, height:100}}/>
                
            </Button>
            
          </Header>

      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#26BCFE',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'flex-start',
    
    
  },
  searchItem:{
    maxWidth:'80%',
    fontSize:5,
    borderRadius:40,
    paddingLeft:5,
    
  },
  
});