import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacountry, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function Geocondig(props) {
    const [Geocondig, setGeocondig] = useState(false);
    const [country, setcountry] = useState(null);
    const [zip, setzip] = useState(null);
    const [SButton, setSButton] = useState(0);


    const Area = () => {
        if(country != null && zip != null){
            if (SButton === 1)
                axios.post("http://10.0.2.2:8080/area_gmail/geocoding", {zip: zip, country:country, mail: props.User})
            else if (SButton === 2)
                axios.post("http://10.0.2.2:8080/area_sendgrid/geocoding", {zip: zip, country:country, mail: props.User})
            else  if (SButton == 3)
                axios.post("http://10.0.2.2:8080/area_spotify/geocoding", {zip: zip, country:country, mail: props.User})
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={Geocondig === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setGeocondig(!Geocondig)}>
                    <Text style={styles.ButtonOfTxt}>{Geocondig === true ? "ON" : "OFF"}</Text>
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

    const Handlecountry = (Txt) => {
        setcountry(Txt)
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
                    {Geocondig === true ? 
                    <View >
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="Code Pays -> FR" type="email" onChangeText={e => Handlecountry(e)} defaultValue={country} />
                        </View>
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="Code Postal -> 94270" type="email" onChangeText={e => setzip(e)} defaultValue={zip} />
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