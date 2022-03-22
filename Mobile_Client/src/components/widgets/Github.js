import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacountry, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function GitHub(props) {
    const [GitHub, setGitHub] = useState(false);
    const [UserName, setUserName] = useState(null);
    const [SButton, setSButton] = useState(0);


    const Area = () => {
        if(UserName != null){
            if (SButton === 1)
                axios.post("http://10.0.2.2:8080/area_gmail/Github", {user: UserName, mail: props.User})
            else if (SButton === 2)
                axios.post("http://10.0.2.2:8080/area_sendgrid/Github", {user: UserName, mail: props.User})
            else  if (SButton == 3)
                axios.post("http://10.0.2.2:8080/area_spotify/Github", {currency: UserName, mail: props.User})       
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={GitHub === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setGitHub(!GitHub)}>
                    <Text style={styles.ButtonOfTxt}>{GitHub === true ? "ON" : "OFF"}</Text>
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
                    {GitHub === true ? 
                    <View >
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="Username -> Fenriru" type="email" onChangeText={e => setUserName(e)} defaultValue={UserName} />
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