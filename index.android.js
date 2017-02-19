/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from "react";
import {AppRegistry, Navigator} from "react-native";
import HomeScreen from "./HomeScreen";

export default class AwesomeProject extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ title: 'Home Screen', index: 0 }}
                renderScene={(route, navigator) => {
        return <HomeScreen title={route.title} />
      }}
            />
        );
    }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
