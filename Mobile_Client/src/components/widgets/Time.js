import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacountry, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function Time(props) {
    const [Time, setTime] = useState(false);
    const [Zone, setZone] = useState(null);
    const [SButton, setSButton] = useState(0);


    const Area = () => {
        if(Zone != null){
            if (SButton === 1)
                axios.post("http://10.0.2.2:8080/area_gmail/time", {timezone: Zone, mail: props.User})
            else if (SButton === 2)
                axios.post("http://10.0.2.2:8080/area_sendgrid/time", {timezone: Zone, mail: props.User})
            else  if (SButton == 3)
                axios.post("http://10.0.2.2:8080/area_spotify/time", {timezone: Zone, mail: props.User})
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={Time === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setTime(!Time)}>
                    <Text style={styles.ButtonOfTxt}>{Time === true ? "ON" : "OFF"}</Text>
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
                    {Time === true ? 
                    <View >
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="fuseau horraire -> Europe/Paris" type="email" onChangeText={e => setZone(e)} defaultValue={Zone} />
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