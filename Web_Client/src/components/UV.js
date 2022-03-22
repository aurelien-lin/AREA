import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function UV(props) {
    const [uv, setuv] = useState(props.state);
    const [lon, setlon] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);
    const [lat, Setlat] =useState("")


   const Area = () => {
       if (SButton === 1) {
        axios.post("http://localhost:8080/area_gmail/uv", {lon: lon, lat:lat, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 2) {
        axios.post("http://localhost:8080/area_sendgrid/uv", {lon: lon, lat:lat, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 3) {
        axios.post("http://localhost:8080/area_spotify/uv", {lon: lon, lat:lat, mail: User})
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
        <button className={uv === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setuv(!uv); props.onChangeState(!uv)}}>
            <div className="txt" className={"ButtonOfTxt"}>{uv === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handlelon = (Txt) => {
        setlon(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}> UV </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {uv === true ? <div className="uvInput" ><Input type="txt" placeholder="latitude" value={lat} onChange={e => Setlat(e.target.value)} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni le prix d'un uv en une devise.
               </div>
           </div>
       </div>
       {uv === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="uvInput" ><Input type="txt" placeholder="longitude" value={lon} onChange={e => handlelon(e.target.value)} /></div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le nom d'une devise.
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
