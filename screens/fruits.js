import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from 'firebase';
import MyHeader from '../components/header';


export default class FruitScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                    
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/applebg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/bananabg.png")} />
                    <Text style={{alignSelf:'center', fontWeight:'bold'}}>Banana</Text>
            </TouchableOpacity>
             <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/grapesbg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Grapes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/guavabg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Guava</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/mangobg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Mango</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image}
                    source={require("../assets/watermelonbg.png")} />
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>Watermelon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin}}
                    onPress={() => {
                        this.props.navigation.navigate("continueShopping")
                    }}>
                    <Image source={require("../assets/backButton.png")} style={{ width: 40, height: 30,}} />

                </TouchableOpacity>

        
    </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({

    image: {
        height: 180,
        width: 210,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    
    })