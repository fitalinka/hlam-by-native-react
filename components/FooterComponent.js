import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {StyleSheet, View, Image, Text} from 'react-native';
import CustomIcon from "./CustomIcon";

import { withNavigation } from 'react-navigation'

class FooterComponent extends Component {
    render() {
        return (
            <Footer transparent style={styles.container}>
                <FooterTab style={styles.footerTab}>
                    <Button style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Category')}>
                        <CustomIcon name="home" style={styles.footerIcon} />
                    </Button>
                    <Button style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Registration')}>
                        <CustomIcon name="message" style={styles.footerIcon} />
                    </Button>
                    <Button active style={styles.buttonItem}>
                        <View style={styles.buttonItemRadius}></View>
                    </Button>
                    <Button style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Subcategory')}>
                        <CustomIcon name="star" style={styles.footerIcon} />
                    </Button>
                    <Button style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Enter')}>
                        <CustomIcon name="profile" style={styles.footerIcon} />
                    </Button>
                </FooterTab>
            </Footer>

        )
    }
}

const styles = StyleSheet.create({
    footerIcon: {
        color: '#B0B0B0',
        fontSize: 30,
    },
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
        marginBottom: 8,
    },
    footerTab: {
        opacity: 0.9,
    }
});

export default withNavigation(FooterComponent);
