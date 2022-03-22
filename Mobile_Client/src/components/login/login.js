import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, TextInput, Pressable }  from 'react-native';
import { useState } from "react";
import {styles} from "../../style"
import Headers from '../headBar/head';
import axios from 'axios';

export default function Login(props) {
    const [Mail, setMail] = useState("");
    const [Password, setPassword] = useState("");
    const [Msg, setMsg] = useState("");

    const Log = () => {
        axios.post("http://10.0.2.2:8080/user/login", {email: Mail, password: Password})
        .then(Response => {
            if (Response.data.message === 'authentificated') {
                props.onChangeState(Mail)
            } else if(Response.data.message === 'incorrect pwd'){
                setMsg("incorrect Password");
            } else if(Response.data.message === 'no user with that email address') {
                setMsg("no user with that email address");
            } else {
                setMsg("unknow error");
            }
        })
        .catch(err => {
            setMsg("serveur connection error");
            console.log(err)
        })
    }

    return (
        <View style={styles.BG}>
            <Headers routes={"Login"} />
            <View style={styles.LoginView}>
                <View style={styles.LogingBlock}>
                    <View style={styles.LogView}>
                        {Msg != "" ? <Text style={styles.ErrText} >{Msg} </Text>: <></>}
                        <TextInput style={styles.input} placeholder='email' type="email" onChangeText={newText => setMail(newText)} defaultValue={Mail} ></TextInput>
                    </View>
                    <View style={styles.LogView}>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder='password' type="password" onChangeText={newText => setPassword(newText)} defaultValue={Password} ></TextInput>
                    </View>
                    <View style={styles.LogView}>
                        <Pressable style={styles.logintButton} title='submit' onPress={() => Log()}>
                            <Text style={styles.TxtLoginButton}>Submit</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.LogButton}>
                    <Pressable style={styles.logintButton} title='GoRegister' onPress={() => props.onChangeState(1)}>
                                <Text style={styles.TxtLoginButton}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
