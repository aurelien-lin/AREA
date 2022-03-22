import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, TextInput }  from 'react-native';
import {styles} from "../../style"



 const Header = (props) => {
   // const route = useRoute();
    
    return (
        <View style={styles.Header}>
            <Text style={styles.HTxt}>AREAP</Text>
            <Text style={styles.HTxt}>{props.routes}</Text>
        </View>
    )
}

export default Header