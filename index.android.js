/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from "react";
import {StyleSheet, AppRegistry, View, Navigator, ToolbarAndroid} from "react-native";
import HomeScreen from "./HomeScreen";

export default class AwesomeProject extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title="Trump Quotes"/>
                <Navigator
                    initialRoute={{ title: 'Home Screen', index: 0 }}
                    renderScene={(route, navigator) => {
        return <HomeScreen title={route.title} />
      }}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        elevation: 4,
        height: 56,
        backgroundColor: '#CF5300',
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
