import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpalong, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function Pollution(props) {
    const [Pollution, setPollution] = useState(false);
    const [long, setlong] = useState(null);
    const [lat, setlat] = useState(null);
    const [SButton, setSButton] = useState(0);


    const Area = () => {
        if(long != null && lat != null){
            if (SButton === 1)
                axios.post("http://10.0.2.2:8080/area_gmail/airpollution", {lon: long, lat: lat, mail: props.User})
            else if (SButton === 2)
                axios.post("http://10.0.2.2:8080/area_sendgrid/airpollution", {lon: long, lat:lat, mail: props.User})
            else  if (SButton == 3)
                axios.post("http://10.0.2.2:8080/area_spotify/airpollution", {lon: long, lat:lat, mail: props.User})
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={Pollution === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setPollution(!Pollution)}>
                    <Text style={styles.ButtonOfTxt}>{Pollution === true ? "ON" : "OFF"}</Text>
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

    const Handlelong = (Txt) => {
        setlong(Txt)
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
                    {Pollution === true ? 
                    <View >
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="longitude -> 2.3607" type="email" onChangeText={e => Handlelong(e)} defaultValue={long} />
                        </View>
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="latitude -> 48.8147" type="email" onChangeText={e => setlat(e)} defaultValue={lat} />
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