import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from 'firebase';
import MyHeader from '../components/header';


export default class PlaceOrderScreen extends React.Component {
render(){
    return(
        <View>
             <MyHeader title="Place An Order"/>
            <Text>Hi</Text>
        </View>
    )
}

}