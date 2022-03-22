import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, TextInput, Pressable }  from 'react-native';
import {styles} from "../../style"

export default function Bottom(props) {
    const navigation = useNavigation();
    const route = useRoute();
    
    return (
        <View style={styles.Bottom}>

            <Pressable style={route.name == "Dashboard" ? styles.BottomButton: styles.BottomButtonOf} title='NotConnected' onPress={() => navigation.navigate("Dashboard", {Spotify: props.Spotify, User: props.User}) } >
                <Text style={styles.ButtonOfTxt}>Dashboard</Text>
            </Pressable>
            <Pressable style={route.name == "Dashboard" ? styles.BottomButtonOf: styles.BottomButton} title='NotConnected' onPress={() => navigation.navigate("Profil", {Spotify: props.Spotify, User: props.User}) } >
                <Text style={styles.ButtonOfTxt}>Profil</Text>
            </Pressable>
        </View>
    )
}