import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
//import { Image } from 'react-native'
import {StyleSheet, View, Image} from 'react-native';

export default class FooterComponent extends Component {
    render() {
        return (
            <Footer transparent style={styles.container}>
                <FooterTab style={styles.footerTab}>
                    <Button style={styles.buttonItem}>
                        <Icon name="apps"/>
                    </Button>
                    <Button style={styles.buttonItem}>
                        <Image style={styles.image} source={require('../assets/images/star.svg')}/>
                    </Button>
                    <Button active style={styles.buttonItem}>
                        <View style={styles.buttonItemRadius}></View>
                    </Button>
                    <Button style={styles.buttonItem}>
                        <Icon name="person"/>
                    </Button>
                    <Button style={styles.buttonItem}>
                        <Icon name="person"/>
                    </Button>
                </FooterTab>
            </Footer>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        opacity: 0.9,
        borderTopWidth: 0,
    },
    buttonItemRadius: {
        width: 50,
        height: 50,
        backgroundColor: '#26BCFE',
        borderRadius: 100,
        marginBottom: 8,
    },
    buttonItem:{
        width: 50,
        height: 50,
        marginBottom: 8

    },
    footerTab: {
        opacity: 0.9,
    }
});
