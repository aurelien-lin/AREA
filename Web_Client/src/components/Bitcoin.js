import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Bitcoin(props) {
    const [Bitcoin, setBitcoin] = useState(props.state);
    const [username, setusername] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {

        if (SButton === 1)
            axios.post("http://localhost:8080/area_gmail/Bitcoin", {currency: username, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        if (SButton === 2)
            axios.post("http://localhost:8080/area_sendgrid/Bitcoin", {currency: username, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        if (SButton === 3)
            axios.post("http://localhost:8080/area_spotify/Bitcoin", {currency: username, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
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
        <button className={Bitcoin === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setBitcoin(!Bitcoin); props.onChangeState(!Bitcoin)}}>
            <div className="txt" className={"ButtonOfTxt"}>{Bitcoin === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handleusername = (Txt) => {
        setusername(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}><br/> Bitcoin </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {Bitcoin === true ? <div className="BitcoinInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni le prix d'un bitcoin en une devise.
               </div>
               <br/>
           </div>
       </div>
       {Bitcoin === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className="BitcoinInput" ><Input type="txt" placeholder="Devise" value={username} onChange={e => handleusername(e.target.value)} /></div>
                   <div className={"WidButton"}>
                        <SelectButton name={"Gmail"} No={1}/>
                        <SelectButton name={"Sendgrid"} No={2}/>
                        <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le nom d'une devise. ex: eur
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
