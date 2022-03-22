import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Geocoding(props) {
    const [geocoding, setgeocoding] = useState(props.state);
    const [zip, setzip] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);
    const [country, Setcountry] = useState("")


   const Area = () => {
       if (SButton === 1) {
        axios.post("http://localhost:8080/area_gmail/geocoding", {zip: zip, country:country, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 2) {
        axios.post("http://localhost:8080/area_sendgrid/geocoding", {zip: zip, country:country, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 3) {
        axios.post("http://localhost:8080/area_spotify/geocoding", {zip: zip, country:country, mail: User})
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
        <button className={geocoding === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setgeocoding(!geocoding); props.onChangeState(!geocoding)}}>
            <div className="txt" className={"ButtonOfTxt"}>{geocoding === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handlezip = (Txt) => {
        setzip(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}> Geocoding</div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {geocoding === true ? <div className="geocodingInput" ><Input type="txt" placeholder="zip" value={country} onChange={e => Setcountry(e.target.value)} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    geocoding
               </div>
           </div>
       </div>
       {geocoding === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="geocodingInput" ><Input type="txt" placeholder="Pays" value={zip} onChange={e => handlezip(e.target.value)} /></div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le code postal et le pays
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
