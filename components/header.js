import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class MyHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <Header
                leftComponent={<Icon name='bars' type='font-awesome' color='#FFFFFF' onPress={() => this.props.navigation.toggleDrawer()} />}
                centerComponent={{ text: this.props.title, style: { color: '#FFFFFF', fontSize: 20, fontWeight: "bold", } }}
                backgroundColor='lime'

            />

        )
    }
}

