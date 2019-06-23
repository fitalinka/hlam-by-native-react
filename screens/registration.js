import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, StyleProvider} from 'native-base';

import HeaderRegistration from '../components/HeaderRegistration.js'
import FooterComponent from '../components/FooterComponent.js'
import RegistrationBody from '../components/RegistrationBody.js'


export default class Registration extends React.Component {

    static navigationOptions = {
        title: 'Регистарция',
    };

    render() {
        return (

            <Container>

                <HeaderRegistration/>
                <RegistrationBody/>
                <FooterComponent/>


            </Container>

        )
    }

}

