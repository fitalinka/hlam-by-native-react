import React, { Component } from 'react';
import { Container, Header, Content,Left, Right, List, ListItem, Text,Icon, Body, Button } from 'native-base';
import { Image, View, StyleSheet} from 'react-native';

export default class CategoryList extends Component {
  render() {
    return (
      
        <Content>
          <List>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Left style={{flex:0}}>
                <View style={styles.listItemIcon}/>
                
              </Left>
              <Body>
                <Text>Недвижимость</Text>
                <Text note style={styles.listItemNote}>230 000 обьявлений</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>


            
          </List>
        </Content>
      
    );
  }
}
const styles = StyleSheet.create({
  listItemIcon: {
    width:50,
    height:50,
    backgroundColor:'#DADADA',


  },
  listItemArrow:{
    fontSize:25,
    color:'#DADADA',
     
  },
  listItemNote:{
    color:'#DADADA',
  },
  
})