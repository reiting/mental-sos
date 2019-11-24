/*This is an example to Make Phone Call, Send SMS or Email Using React Native Communication*/
import React, { Component } from 'react';
//import React
import AsyncStorage from '@react-native-community/async-storage'

import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
//import Basic React Components

import Communications from 'react-native-communications';
// either import the whole module and call as Communications.phonecall('0123456789', true)
// or can import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { phonecall('0123456789', true) }}

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            number: ''
        };
    }

    static navigationOptions = {
        title: 'Home'
    };

    async componentDidMount() {
        const value = await AsyncStorage.getItem('chosenNumber');
        this.setState({ number: value });
        console.log('number: ', this.state.number);

        const otherValue = await AsyncStorage.getItem('chosenMessage');
        this.setState({ message: otherValue });
        console.log('message: ', this.state.message);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headingStyle}>Mental Health SOS</Text>

                {/*To send the text message function(phoneNumber = null, body = null)*/}
                <TouchableOpacity
                    style={styles.button, styles.first}
                    onPress={() => Communications.text(this.state.number, this.state.message)
                    }>
                    <Text style={styles.text}>
                        Send Emergency Contacts Alert Message with Location
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button, styles.second}
                    onPress={() => Communications.text('741741', 'Talk')}>
                    <Text style={styles.text}>
                        Send "Talk" to Crisis Text Line for Support
                    </Text>
                </TouchableOpacity>

                {/*To make a phone call phonecall(phoneNumber, prompt) */}
                <TouchableOpacity
                    style={styles.button, styles.third}
                    onPress={() => Communications.phonecall('18002738255', true)}>
                    <Text style={styles.text}>
                        Call National Suicide Prevention Hotline
                    </Text>
                </TouchableOpacity>

                {/*To make a phone call phonecall(phoneNumber, prompt) */}
                <TouchableOpacity
                    style={styles.button, styles.fourth}
                    onPress={() => Communications.phonecall('411', true)}>
                    <Text style={styles.text}>
                        Call 911
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button, styles.last}
                    onPress={() => this.props.navigation.navigate('Contacts')}>
                    <Text style={styles.link}>
                        Set Up/Change Emergency Contact and/or Message
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgb(253,253,253)',
    },
    headingStyle: {
        fontSize: 25,
        textAlign: 'center',
        padding: 30,
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    first: {
        backgroundColor: "green",
        width: '100%',
        aspectRatio: 4 / 1,
    },
    second: {
        backgroundColor: "yellow",
        width: '100%',
        aspectRatio: 4 / 1,
    },
    third: {
        backgroundColor: "orange",
        width: '100%',
        aspectRatio: 4 / 1,
    },
    fourth: {
        backgroundColor: "red",
        width: '100%',
        aspectRatio: 4 / 1,
    },
    last: {
        backgroundColor: "white",
        width: '100%',
        aspectRatio: 4 / 1,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        color: 'black',
        flexDirection: 'row',
    },
});


