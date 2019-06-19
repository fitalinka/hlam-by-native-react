import React, { Component } from 'react';
import { Container, Header, Content,Left, Right, List, ListItem, Text,Icon, Body, Button } from 'native-base';
import { Image, View, StyleSheet} from 'react-native';

export default class SubcategoriesList extends Component {
  render() {
    return (
      
        <Content>
          <List>
            <ListItem noIndent style={styles.listItem}>
              <Body>
                <Text>Недвижимость</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Body>
                <Text>Недвижимость</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Body>
                <Text>Недвижимость</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward' style={styles.listItemArrow}/>
              </Right>
            </ListItem>
            <ListItem noIndent style={styles.listItem}>
              <Body>
                <Text>Недвижимость</Text>
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
  listItem:{
    height:50,
  },
  listItemArrow:{
    fontSize:25,
    color:'#DADADA',
     
  },
  listItemNote:{
    color:'#DADADA',
  },
  
})