import React, { Component } from 'react';
import { Content,  Form, Item, Input, Title,  Text, Button } from 'native-base';
import {StyleSheet, View, ScrollView,} from 'react-native';


export default class EnterBody extends Component {
  render() {
    return (
    	<Content >
    		<View style={{marginTop:40, marginBottom:40}}>
    			<Title style={{fontSize:19, color:'#305F6E'}}> Авторизуйтесь в приложении</Title>
    			<Text note style={{textAlign:'center'}}>Размещайте объявления, звоните, пишите сообщения, договаривайтесь о сделках</Text>
    		</View>
      		<Form>
            <Item style={{marginRight:15, marginBottom:15}}>
              <Input style={{height:30}} placeholder="Телефон или адрес эл. почты" />
            </Item>
            <Item style={{marginRight:15, marginBottom:40}}>
              <Input style={{height:30}} placeholder="Пароль" />
            </Item>
            <Button block style={{marginLeft:15, marginRight:15, backgroundColor:'#00D300', borderRadius:40}}>
            <Text>Дальше</Text>
          </Button>
          </Form>
    	</Content>
      
    )
  }
}
const styles = StyleSheet.create({
  body: {
  },
  
});

