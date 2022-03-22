import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Button, TextInput, Pressable }  from 'react-native';
import {styles} from "../../style"
import Headers from '../headBar/head';
import axios from 'axios';

export default function Register(props) {
    const [Mail, setMail] = useState("");
    const [Password, setPassword] = useState("");
    const [CheckPsw, setCheckPsw]= useState("");
    const [Msg, setMsg] = useState("");
    const [Pseudo, setPseudo] = useState("");

    const Log = () => {
        if(CheckPsw != Password){
            setMsg =("password & verification password are different");
        }
        axios.post("http://10.0.2.2:8080/user/register", {email: Mail, password: Password, name:Pseudo})
        .then(Response => {
            if (Response.data.message === 'registered') {
                props.onChangeState(2)
            } else if(Response.data.message === 'user already exists'){
                setMsg("user already exists");
            } else {
                setMsg("incorrect");
                setMsg(Response.data.message);
            }
        })
        .catch(err => {
            setMsg("serveur connection error");
            //console.log(err)
        })
    }

    return (
        <>
            <Headers routes={"Register"} />
            <View style={styles.LoginView}>
                <View style={styles.LogingBlock}>
                    <View style={styles.LogView}>
                        {Msg != "" ? <Text style={styles.ErrText} >{Msg} </Text>: <></>}
                        <TextInput style={styles.input} placeholder='pseudo' type="pseudo" onChangeText={newText => setPseudo(newText)} defaultValue={Pseudo}></TextInput>
                    </View>
                    <View style={styles.LogView}>
                        <TextInput style={styles.input} placeholder='email' type="email" onChangeText={newText => setMail(newText)} defaultValue={Mail}></TextInput>
                    </View>
                    <View style={styles.LogView}>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder='password' type="password" onChangeText={newText => setPassword(newText)} defaultValue={Password}></TextInput>
                    </View>
                    <View style={styles.LogView}>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder='password' type="confirm password" onChangeText={newText => setCheckPsw(newText)} defaultValue={CheckPsw}></TextInput>
                    </View>
                    <View style={styles.LogView}>
                        <Pressable style={styles.logintButton} title='submit' onPress={() => Log()}>
                            <Text style={styles.TxtLoginButton}>Submit</Text>
                        </Pressable>
                    </View>
                </View >

                <View style={styles.LogButton}>
                    <Pressable style={styles.logintButton} title='GoLogin' onPress={() => props.onChangeState(2)}>
                                <Text style={styles.TxtLoginButton}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
