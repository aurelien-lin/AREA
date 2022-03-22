import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function Wid1(props) {
    const [Wid1, setWid1] = useState(false);
    const [City, setCity] = useState(null);
    const [SButton, setSButton] = useState(0);
    const [Send, setSend] = useState("NOP");


    const Area = () => {
        if(City != null){
            if (SButton === 1){
                axios.post("http://10.0.2.2:8080/area_gmail/covid", {country: City, mail: props.User})
                setSend("Gmail")
            } else if (SButton === 2) {
                axios.post("http://10.0.2.2:8080/area_sendgrid/covid", {country: City, mail: props.User})
                setSend("sendril")
            } else  if (SButton == 3) {
                axios.post("http://10.0.2.2:8080/area_spotify/covid", {country: City, mail: props.User})
                setSend("spotify")
            }
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={Wid1 === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setWid1(!Wid1)}>
                    <Text style={styles.ButtonOfTxt}>{Wid1 === true ? "ON" : "OFF"}</Text>
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

    const HandleCity = (Txt) => {
        setCity(Txt)
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
                    {Wid1 === true ? 
                    <View >
                    <TextInput  style={styles.WidInput} placeholder="Pays -> France" type="email" onChangeText={e => HandleCity(e)} defaultValue={City} />
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