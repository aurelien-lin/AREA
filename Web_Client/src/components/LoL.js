import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function LoL(props) {
    const [time, settime] = useState(props.state);
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {
       if (SButton === 1) {
        axios.post("http://localhost:8080/area_gmail/lol", {mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 2) {
        axios.post("http://localhost:8080/area_sendgrid/lol", {mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 3) {
        axios.post("http://localhost:8080/area_spotify/lol", {mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
   }

   const HandleButton = (props) => {
    setSButton(props)
    }

    const SelectButton = (props) => {
        return(
            <button className={SButton === props.No ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {HandleButton(props.No); Area()}}>
                <div className="txt" className={"ButtonOfTxt"}>{props.name}</div>
            </button>
        )
    }


    const SwitchButton = (props) => {
        return(
        <button className={time === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {settime(!time); props.onChangeState(!time)}}>
            <div className="txt" className={"ButtonOfTxt"}>{time === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}><br/> League of Legends </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {time === true ? <div className="timeInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description:
                    Affiche les champions gratuit de la semaine<br/>
               </div>
               <br/>
           </div>
       </div>
       {time === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}><br/> Paramètres </div>
                   <div className="LoLInput" ><Input type="hidden" style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation:
                        Cliquez sur la reaction voulu<br/>
                   </div>
                   <br/>
               </div>
            </div>
            : ""}
    </div>
    )
}
