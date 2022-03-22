import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacountry, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function Lol(props) {
    const [Lol, setLol] = useState(false);
    const [SButton, setSButton] = useState(0);


    const Area = () => {
        if (SButton === 1)
            axios.post("http://10.0.2.2:8080/area_gmail/lol", { mail: props.User})
        else if (SButton === 2)
            axios.post("http://10.0.2.2:8080/area_sendgrid/lol", {mail: props.User})
        else  if (SButton == 3)
            axios.post("http://10.0.2.2:8080/area_spotify/lol", {mail: props.User})
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={Lol === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setLol(!Lol)}>
                    <Text style={styles.ButtonOfTxt}>{Lol === true ? "ON" : "OFF"}</Text>
                </Pressable>
            </View>
        )
    }

    const Button = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={SButton === props.No ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => {setSButton(props.No), Area()}}>
                    <Text style={styles.ButtonOfTxt}>{props.Name}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <>
        <View style={styles.WidNot}>
            <View style={styles.WidNotDysplay}>
                <Text style={styles.Text}>{props.name}</Text>
                <View style={styles.WidButton}>
                    <SwitchButton/>
                </View>
                <View >
                    {Lol === true ? 
                    <View >
                    <View style={styles.WidButtonActiv}>
                        <Button Name=" Gmail "  No={1}/>
                        <Button Name="Sengrild" No={2}/>
                        <Button Name="Spotify" No={3}/>
                    </View>
                </View>
                 : <></>}
                </View>
                <Text style={styles.Text}>{props.description}</Text>
                </View>
        </View>
        </>
    )
}