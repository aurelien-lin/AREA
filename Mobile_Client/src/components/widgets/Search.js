import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacountry, StyleSheet, Button, Pressable, TextInput }  from 'react-native';
import {styles} from "../../style";
import axios from 'axios';

export default function Search(props) {
    const [Search, setSearch] = useState(false);
    const [SearchQuery, setSearchQuery] = useState(null);
    const [SButton, setSButton] = useState(0);

    const Area = () => {
        if(SearchQuery != null){
            if (SButton === 1)
                axios.post("http://10.0.2.2:8080/area_gmail/search", {searchQuery: SearchQuery, mail: props.User})
            else if (SButton === 2)
                axios.post("http://10.0.2.2:8080/area_sendgrid/search", {searchQuery: SearchQuery, mail: props.User})
            else  if (SButton == 3)
                axios.post("http://10.0.2.2:8080/area_spotify/search", {searchQuery: SearchQuery, mail: props.User})
        }
    }

    const SwitchButton = (props) => {
        return(
            <View style={styles.WidSideSpace}>
                <Pressable style={Search === true ? styles.Button : styles.ButtonOf} title='GoRegister' onPress={() => setSearch(!Search)}>
                    <Text style={styles.ButtonOfTxt}>{Search === true ? "ON" : "OFF"}</Text>
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
                    {Search === true ? 
                    <View >
                        <View style={styles.litleSpace}>
                            <TextInput  style={styles.WidInput} placeholder="Search" type="email" onChangeText={e => setSearchQuery(e)} defaultValue={SearchQuery} />
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