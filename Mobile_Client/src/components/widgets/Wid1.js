import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Button, TextInput, Pressable }  from 'react-native';
import {styles} from "../../style"

const DisplayButton = (props) => {

}

export default function Wid1(props) {
    const [Wid1, setWid1] = useState(false);
    const [City, setCity] = useState("");
    const [SButton, setSButton] = useState(0);

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
                <Pressable style={SButton === props.No ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setSButton(props.No)}>
                    <Text style={styles.ButtonOfTxt}>{props.Name}</Text>
                </Pressable>
            </View>
        )
    }

    const Actif = () => {
        return(
            <View >
                <TextInput style={styles.WidInput} placeholder={"country name"} value={City} onChange={e => setCity(e)} />
                <View style={styles.WidButtonActiv}>
                    <Button Name=" Gmail "  No={1}/>
                    <Button Name="Sengrild" No={2}/>
                </View>
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
                    {Wid1 === true ? <Actif/> : <></>}
                </View>
                <Text style={styles.Text} >short description: {'\n'} {props.description}</Text>
            </View>
        </View>
        </>
    )
}