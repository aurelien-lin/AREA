/* const colors */
/*  */
/* Header */
/* Welcome */
/* Register/Login */
/* Profile */
/* Dashboard */
/* Widgect */
/* Bottom */ 
import react from 'react';
import React, {StyleSheet, Dimensions} from 'react-native'
import backgroundImage from './pictures/bg-noise-texture.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
/* const colors */
/* https://www.w3schools.com/colors/colors_picker.asp */
const Blue = "blue";
const BlueSpe = "#60a8cb";
const BlueSpe2 = "#2F4F4F";
const Red = "red";
const DarckGrey = "#2F4F4F"
const Black = "#1a0000";
const Grey = "grey";
const whiteGrey = "#D3D3D3";
const White = "white";
const Green = "green";
const BackGroundColor = BackGroundColor;

/* */
const styles = StyleSheet.create({
    BG:{
        backgroundColor: BackGroundColor,
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Grey,
        margin: 0,
        padding: 0,
        height: "100%",
        flexDirection: "column", 
        /*alignItems: 'center',*/
        /*justifyContent: 'center',*/
      },

    Text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },

    ErrText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: Red,
    },

    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        //backgroundColor: Green,
        backgroundColor: Black,
    },
    ButtonTxt: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: White,
    },
    ButtonOf: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: DarckGrey,
    },
    ButtonOfTxt: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: White,
    },


    Scroll: {
        backgroundColor: BackGroundColor,
    },
    /* Header */
    Header: {
        backgroundColor: BlueSpe,
        padding: 20,
        flexBasis: "10%",
        alignItems: 'center',
        /*display: 1,*/
    },
    HTxt: {
        color: White,
    },

    /* Welcome */
    Wel: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center',
        backgroundColor: BackGroundColor,
    }, 

    WelView: {
        padding: "10%",
        justifyContent: "space-evenly",
    }, 

    WelButton: {
        justifyContent: "space-between",
    },

    /* login/register */
    LoginView: {
        backgroundColor: BackGroundColor,
        justifyContent: 'center',
        flexBasis: "100%",
    },
    logintButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        //backgroundColor: Green,
        backgroundColor: Black,
    },
    TxtLoginButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: White,
    },

    LogView : {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: "10%",
        paddingRight: "10%",
    },

    LogingBlock: {
        paddingTop: "20%"
    },

    LogButton: {
        paddingTop: "30%",
        paddingBottom: "20%",
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    /* Profile */
    Profile: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    ProfileView: {
        //backgroundColor: BackGroundColor,
    },

    /* Dashboard */

    Dash: {
        width: "100%",
        height: "100%",
        paddingTop: 5,
    },

    WidegectDysplay: {
        //backgroundColor: 'red',
        //justifyContent: "space-between",
        //alignItems: "center",

        paddingTop: "1%",
        paddingBottom: "1%",
        //paddingLeft: "10%",
        //paddingRight: "10%",

    },
    WidNotDysplay: {
        backgroundColor: Grey,
        //width: "90%", 
        //height: 60 ,
        justifyContent: 'center',
        alignItems: "center",

    },

    WidNot: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
    },

    DashSpace: {
        paddingTop: 15,
        paddingBottom: 15,
        width: "60%",
    },
    /* Widgect */

    litleSpace: {
        paddingTop: 5,
    },

    widView: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    widSpace: {
        backgroundColor: Grey,
        justifyContent: 'center',
        alignItems: "center",
    },

    WidButton: {
        paddingTop: 15,
        paddingBottom: 15,
        width: "60%",
    },

    WidButtonActiv: {
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 15,
        width: "80%",
    },

    WidSideSpace: {
        padding: 1,
    },

    WidInput: {
        backgroundColor: whiteGrey,
    },

    /* Bottom */ 
    Bottom: {
        backgroundColor: BackGroundColor,
        flexDirection: "row",
        padding: 0,
        flexBasis: "10%",
        alignItems: "center"
    },
    BottomButton: {
        width: "50%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: BlueSpe,
    },
    BottomButtonTxt: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: White,
    },
    BottomButtonOf: {
        width: "50%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: DarckGrey,
    },
    BottomButtonTxtOf: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: White,
    },
});

export {styles}