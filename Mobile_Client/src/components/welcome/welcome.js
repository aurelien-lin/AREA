import React from 'react';
import { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Button, Pressable }  from 'react-native';
import {styles} from "../../style"

const Welcome = (props) => {
    return(
        <>
            <View style={styles.Wel}>
                <View style={styles.WelView}>
                    <View style={styles.WelView}>
                        <Pressable style={styles.logintButton} title='GoRegister' onPress={() => props.onChangeState(1)}>
                                <Text style={styles.TxtLoginButton}>REGISTER</Text>
                        </Pressable>
                    </View>
                    <View style={styles.WelView}>
                        <Pressable style={styles.logintButton} title='GoLogin' onPress={() => props.onChangeState(2)}>
                                    <Text style={styles.TxtLoginButton}>LOGIN</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Welcome