import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Weather(props) {
    const [Weather, setWeather] = useState(props.state);
    const [City, setCity] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {
       if (SButton === 1) {
        axios.post("http://localhost:8080/area_gmail/weather", {city: City, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 2) {
        axios.post("http://localhost:8080/area_sendgrid/weather", {city: City, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 3) {
        axios.post("http://localhost:8080/area_spotify/weather", {city: City, mail: User})
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
        <button className={Weather === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setWeather(!Weather); props.onChangeState(!Weather)}}>
            <div className="txt" className={"ButtonOfTxt"}>{Weather === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handleCity = (Txt) => {
        setCity(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}><br/> Climat</div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {Weather === true ? <div className="WeatherInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni le climat d'une ville.
               </div>
               <br/>
           </div>
       </div>
       {Weather === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className="WeatherInput" ><Input type="txt" placeholder="Ville" value={City} onChange={e => handleCity(e.target.value)} /></div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le nom d'une ville.
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
