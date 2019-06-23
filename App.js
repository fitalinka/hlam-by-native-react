import React from 'react';
import {Font, AppLoading} from 'expo';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {Root, StyleProvider} from 'native-base';
import {createStackNavigator, createAppContainer} from "react-navigation";

import getTheme from './assets/native-base-theme/components';
import hlamTheme from './assets/native-base-theme/variables/hlamTheme.js';

import Enter from './screens/enter';
import Registration from './screens/registration';
import Category from './screens/category';
import Subcategory from './screens/subcategory';

const styles = StyleSheet.create({
    container: {},
});

const AppNavigator = createStackNavigator(
    {
        Enter: Enter,
        Category: Category,
        Registration: Registration,
        Subcategory: Subcategory,
    },
    {
        initialRouteName: "Enter"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
            'icomoon': require('./resources/fonts/icomoon.ttf'),
        });
        this.setState({loading: false});
    }

    render() {

        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading/>
                </Root>
            );
        }
        return (
            <StyleProvider style={getTheme(hlamTheme)}>
                <AppContainer />
            </StyleProvider>
        )

    }
}

