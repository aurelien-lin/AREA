import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpalat, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function UV(props) {
    const [UV, setUV] = useState(false);
    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null);
    const [SButton, setSButton] = useState(0);


    const Area = () => {
        if(lat != null && lon != null){
            if (SButton === 1)
                axios.post("http://10.0.2.2:8080/area_gmail/uv", {lon: lon, lat:lat, mail: props.User})
            else if (SButton === 2)
                axios.post("http://10.0.2.2:8080/area_sendgrid/uv", {lon: lon, lat:lat, mail: props.User})
            else  if (SButton == 3)
                axios.post("http://10.0.2.2:8080/area_spotify/uv", {lon: lon, lat:lat, mail: props.User})
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={UV === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setUV(!UV)}>
                    <Text style={styles.ButtonOfTxt}>{UV === true ? "ON" : "OFF"}</Text>
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

    const Handlelat = (Txt) => {
        setlat(Txt)
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
                    {UV === true ? 
                    <View >
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="latitude -> 48.8147" type="email" onChangeText={e => Handlelat(e)} defaultValue={lat} />
                        </View>
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="longitude -> 2.3607" type="email" onChangeText={e => setlon(e)} defaultValue={lon} />
                        </View>
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