import React from 'react';
import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button, ScrollView, FlatList, Pressable, ActivityIndicator, Modal } from 'react-native';
import Headers from '../headBar/head';
import Covid from"../widgets/Covid";
import Pollution from "../widgets/Pollution";
import Bitcoin from "../widgets/Bitcoin";
import Geocoding from "../widgets/Geocoding";
import Github from "../widgets/Github";
import Money from "../widgets/Money";
import News from "../widgets/News";
import Search_Google from "../widgets/Search_Google";
import Search from "../widgets/Search";
import Spotify1 from "../widgets/Spotify";
import Time from "../widgets/Time";
import UV from "../widgets/UV";
import Weather from "../widgets/Weather";
import Lol from "../widgets/lol"
import {styles} from "../../style"
import { WebView } from 'react-native-webview';

export default function Dashboard (props ) {
    const [IsConnected, setConnect] = useState(false);
    const [ShowModal, setShowModal] = useState(false);


const NotConnected = (props) => {
    return(
        <View style={styles.WidNot}>
            <View style={styles.WidNotDysplay}>
                <Text style={styles.Text}>{props.name}</Text>
                <View style={styles.DashSpace}>
                    <Pressable style={[props.type === true ? styles.Button : styles.ButtonOf]} title='GoRegister'>
                                <Text style={[props.type === true ? styles.ButtonTxt : styles.ButtonOfTxt]}> {props.type === false ? "Connect to "+ props.title : "Disconnect "}</Text> 
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const ConnectSpotify = (props) => {
    return(
        <View style={styles.WidNot}>
            <View style={styles.WidNotDysplay}>
                <Text style={styles.Text}>{props.name}</Text>
                <View style={styles.DashSpace}>
                    <Pressable style={[props.type === true ? styles.Button : styles.ButtonOf]} title='GoRegister' 
                        onPress={() => {setShowModal(!ShowModal), setConnect(!IsConnected)}}>
                                <Text style={[props.type === true ? styles.ButtonTxt : styles.ButtonOfTxt]}> {props.type === false ? "Connect to "+ props.title : "Disconnect "}</Text> 
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const MyModal = () => {
    return(
        <Modal visible={ShowModal}>
            <View style={styles2.modal}>
                <View style={styles2.modalContainer}>
                    <WebView
                        style={{ flex : 1 }} 
                        source={{uri: 'http://10.0.2.2:8080/spotify/authorize_mobile'}}/>
                      <Pressable style={[styles2.button, styles2.buttonClose]} onPress={() => setShowModal(!ShowModal)} >
                        <Text style={styles2.textStyle}>Hide Modal</Text>
                      </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const Widgects = (props) => {
    return(
        <View>
            <Covid name={"Covid"} User={props.User} description={"Fourni les dernières information par rapport au covid"}/>
            <Bitcoin name={"Bitcoin"} User={props.User} description={"Fourni le prix d'un bitcoin en une devise."}/>
            <Weather name={"Weather"} User={props.User} description={"Fourni le climat d'une ville."}/>
            <Geocoding name={"Geocoding"} User={props.User} description={"Fourni des infos de géographique d'un pays et d'un code postal"}/>
            <Pollution name={"Pollution"} User={props.User} description={"Fourni la taux de pollution d'une position géographique."}/>
            <UV name={"UV"} User={props.User} description={"Fourni le taux d'ensoleillement d'une position géographique"}/>
            <Time name={"Time"} User={props.User} description={"Fourni l'heure du fuseau horraire donné"}/>
            <Search name={"Search"} User={props.User} description={"Fourni le résultat d'une recherche sur youtube."}/>
            <Search_Google name={"Search Google API"} User={props.User} description={"Fourni le résultat d'une recherche sur GoogleApis."}/>
            <News name={"News"} User={props.User} description={"Fourni les nouvelles d'un pays selon une catégorie."}/>
            <Money name={"MONEY"} User={props.User} description={"Fourni le taux de change de la devise choisi"}/>
            <Github name={"GitHUB"} User={props.User} description={"Fourni le nombre de repo publique d'un utilisateur."}/>
            <Lol name={"League of Legends"} User={props.User} description={"Donne la liste des champions gratuit de la semaine"}/>
            {IsConnected === true ?  <Spotify1 name={"Spotify"} User={props.User} description={"Fourni son nombre d'abonnement"}/> : <NotConnected name={"Spotify"} /> }
            <ConnectSpotify name={"Connection Spotify"} />
        </View>
    );

};

    return(
        <>
            <Headers  routes={"Dashboard"} />
            <ScrollView style={styles.Scroll}>
                <View style={styles.Dash}>
                    <Widgects User={props.page} /*User={props.User}*//>
                </View>
            </ScrollView>
            <MyModal />
        </>
    )
}



const styles2 = StyleSheet.create({
    modal : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer : {
        backgroundColor : 'white',
        width : '90%',
        height : '90%',
    },
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
})