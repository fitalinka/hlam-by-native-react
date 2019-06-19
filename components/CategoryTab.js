import React, { Component } from 'react';
import { Content, Button, Icon, Text, Header, Tab, Tabs, TabHeading } from 'native-base';
import {StyleSheet, View, ScrollView} from 'react-native';


export default class CategoryTab extends Component {
  render() {
    return (
      <Tabs>
          <Tab heading={
            <TabHeading style={styles.tabItem}>
              <View style={styles.tabItemRadius}></View>
              <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{fontSize:12}}
              >Все категории</Text>
            </TabHeading>}>
            
            
          </Tab>
          <Tab heading={
          <TabHeading style={styles.tabItem}>
          <View style={styles.tabItemRadius}></View>
          <Text 
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{fontSize:12}}
           >Недвижимость</Text>
          </TabHeading>}>
            
          </Tab>
          <Tab heading={
          <TabHeading style={styles.tabItem}>
          <View style={styles.tabItemRadius}></View>
          <Text 
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{fontSize:12}}
           >Животные</Text>
          </TabHeading>}>
            
          </Tab>
          <Tab heading={
          <TabHeading style={styles.tabItem}>
          <View style={styles.tabItemRadius}></View>
          <Text 
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{fontSize:12}} >Работа</Text>
          </TabHeading>}>
            
          </Tab>
      </Tabs>
      )
  }
}
const styles = StyleSheet.create({
  
  tabItem:{
    display:'flex',
    flexDirection: 'column',
    fontSize:8,

    
  },
  tabItemRadius:{
    width: 40,
  height: 40,
  backgroundColor: '#26BCFE',
  borderRadius: 100,


  },
  
});

                  
                  
          
        