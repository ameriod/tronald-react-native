/**
 * The home page where the use can see a random quote and meme and then launch a search a filter screen
 *
 * Created by parker on 2/19/17.
 */

'use strict';

import React, {Component} from "react";
import {StyleSheet, Text, View, Image, TouchableHighlight} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "Loading Random Quote...",
            meme: getMemeUrl()
        };
        this.fetchRandomQuote = this.fetchRandomQuote.bind(this);
        this.fetchRandomMeme = this.fetchRandomMeme.bind(this);

        this.fetchRandomQuote();
    }

    fetchRandomMeme = function () {
        // add a random get para that is ignored by the api to make the url unqire
        this.setState({
            meme: getMemeUrl()
        })
    };

    fetchRandomQuote = function () {
        return fetch('https://api.tronalddump.io/random/quote')
            .then(function (response) {
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    quote: responseJson.value
                });
            })
            .catch((error) => {
                console.error(error);
            })
            .done();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>

                    <TouchableHighlight
                        onPress={this.fetchRandomQuote}
                        style={styles.touchable}>
                        <Text>
                            Get Random Quote
                        </Text>
                    </TouchableHighlight>
                    <Text>
                        {this.state.quote}
                    </Text>

                </View>

                <View style={styles.bottom}>

                    <TouchableHighlight
                        onPress={this.fetchRandomMeme}
                        style={styles.touchable}>
                        <Text>
                            Get Random Meme
                        </Text>
                    </TouchableHighlight>

                    <View style={{flexDirection: "row", flex: 1}}>

                        <Image source={{uri: this.state.meme}} resizeMode='contain'
                               style={{flex: 1, resizeMode: "contain", width: null, height: null}}/>
                    </View>
                </View>
            </View>
        );
    }
}

const getMemeUrl = function () {
    return "https://api.tronalddump.io/random/meme" + '?random_number=' + new Date().getTime();
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchable: {
        padding: 8,
        margin: 8
    }
});