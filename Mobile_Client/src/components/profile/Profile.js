import React from 'react';
import { useState } from "react";
import {Text, View, ScrollView, TouchableOpacity, StyleSheet, Button, TextInput, Pressable }  from 'react-native';
import {styles} from "../../style"
import Headers from "../headBar/head";
import Bottom from "../bottomBarre/botom";

export default function Profil({route, navigation}) {
    const [IsConnected, setConnect] = useState('true');
    const [Spotify, setSpotify] = useState(route.params.Spotify);


    const SwiRchButton = (props) => {
        return(
            <View style={styles.WidButton}>
                <Pressable style={[props.type === true ? styles.Button : styles.ButtonOf]} title='GoRegister' 
                 onPress={() => {if(props.type === true){ props.onChangeState(false) }else props.onChangeState(true)}}>
                            <Text style={[props.type === true ? styles.ButtonTxt : styles.ButtonOfTxt]}> {props.type === false ? "Connect to "+ props.title : "Disconnect " + props.name + props.title}</Text> 
                </Pressable>
            </View>
        )
    }

    return (
        <>
            <Headers  routes={route.name} />
            <ScrollView style={styles.Scroll} >
                <View style={styles.Profile}>
                    <SwiRchButton name={route.params.User} title={" from the app"} type={IsConnected} onChangeState={(newState) => (setConnect('false')), () => navigation.navigate("Welcome")} />
                    <SwiRchButton title={"Spotify"} type={Spotify} onChangeState={(newState) => {setSpotify(newState)}} />
                </View>
            </ScrollView>
            <Bottom  Spotify={Spotify} User={route.params.User} />
        </>
    )
}