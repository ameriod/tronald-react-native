/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import HomeScreen from "./HomeScreen";

export default class AwesomeProject extends Component {
    render() {
        return (
            <HomeScreen/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
