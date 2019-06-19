import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class CardElement extends Component {
  render() {
    return (
      
        
          <Card transparent style={{position:'relative'}}>
            
            <CardItem style={{alignItems:'flex-start'}}>
              
               
                  
                  <Image source={require('../assets/images/bike.png')}  style={{width:'40%',height:'100%',marginRight:20}}/>
                
                  <View>
                    <Text style={styles.CardItemName}>Новий велосипед Benetti Sette 27.5”</Text>
                    <Text style={styles.CardItemPrice}>2000 руб.</Text>
                    <Text note style={styles.CardItemCity}>Минск</Text>
                    <Text note style={styles.CardItemDate}>Сегодня, 21:50</Text>
                  </View>
                  <Button transparent style={styles.CardItemAdd} >
                    <Icon name="logo-github" />
                    
                  </Button>
                
              
            </CardItem>
            
          </Card>
        
    );
  }
}
const styles = StyleSheet.create({
  CardItemName: {
    fontSize: 16,
    width:'50%',
    color: '#305F6E',


  },
  CardItemPrice:{
    fontSize: 16,
    color: '#305F6E',
    fontWeight:'600',
    color: '#305F6E',

  },
  CardItemAdd:{
    position:'absolute',
    bottom:10,
    right:10,
  },
  CardItemCity:{
    color:'#A3A3A3',
    fontSize:11,
  },
  CardItemDate:{
    color:'#A3A3A3',
    fontSize:11,
  }
})