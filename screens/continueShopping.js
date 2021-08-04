import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from 'firebase';
import MyHeader from '../components/header';
import VegetableScreen from './vegetables';
import FruitScreen from './fruits';

export default class ContinueShoppingScreen extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="Continue Shopping" />

                <TextInput
                    style={[styles.formTextInput, { height: 30 }]}
                    placeholder={"Search"}
                    onChangeText={(text) => {
                        this.setState({
                            reasonToRequest: text
                        })
                    }} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button}
                     onPress={() => {
                        this.props.navigation.navigate("Vegetables")
                      }}> 
                        <Text style={styles.buttonText}>Vegetables</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                     onPress={() => {
                        this.props.navigation.navigate("Fruits")
                      }}> 
                        <Text style={styles.buttonText}>Fruits</Text>
                        
                    </TouchableOpacity>

                </View>
                
            </View>
        )
    }

}
const styles = StyleSheet.create({
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: 'lime',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    button: {
        backgroundColor: 'lime',
        marginTop: 60,
        height: 50,
        width: 160,
        justifyContent: 'center',
        marginLeft: 20,


    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'

    },
    image: {
        height: 180,
        width: 210,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    image2: {
        height: 210,
        width: 210,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 350,
        marginTop: 95

    },
    image3: {
        height: 210,
        width: 210,
        marginLeft: 350,
        marginTop: 140,
        alignSelf: 'center',
        justifyContent: 'center',

    },
    image4: {
        height: 210,
        width: 210,
        marginLeft: 300,
        marginTop: 140,
        alignSelf: 'center',
        justifyContent: 'center',


    },


})