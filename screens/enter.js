import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, StyleProvider} from 'native-base';

import HeaderEnter from '../components/HeaderEnter.js'
import FooterComponent from '../components/FooterComponent.js'
import EnterBody from '../components/EnterBody.js'


export default class Enter extends React.Component {

    static navigationOptions = {
        title: 'Вход',
    };

    render() {
        return (

            <Container>

                <HeaderEnter/>
                <EnterBody/>
                <FooterComponent/>


            </Container>

        )
    }

}

