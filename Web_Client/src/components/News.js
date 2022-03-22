import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function News(props) {
    const [News, setNews] = useState(props.state);
    const [Country, setCountry] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);
    const [Cat, SetCat] =useState("")


   const Area = () => {
        if (SButton === 1) {
            axios.post("http://localhost:8080/area_gmail/News", {country: Country, category:Cat, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        }
        if (SButton === 2) {
            axios.post("http://localhost:8080/area_sendgrid/News", {country: Country, category:Cat, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        }
        if (SButton === 3) {
            axios.post("http://localhost:8080/area_spotify/News", {country: Country, category:Cat, mail: User})
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
        <button className={News === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setNews(!News); props.onChangeState(!News)}}>
            <div className="txt" className={"ButtonOfTxt"}>{News === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handleCountry = (Txt) => {
        setCountry(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}><br/> News </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {News === true ? <div className="NewsInput" ><Input type="txt" placeholder="catégorie" value={Cat} onChange={e => SetCat(e.target.value)} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni les nouvelles d'un pays selon une catégorie.
               </div>
               <br/>
           </div>
       </div>
       {News === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}><br/> Paramètres </div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="NewsInput" ><Input type="txt" placeholder="Pays" value={Country} onChange={e => handleCountry(e.target.value)} /></div>
                   <div className="txt">
                        Utilisation: <br/>
                        remplissez une catégorie (ex:general, business) et un pays (ex:France).
                   </div>
                   <br/>
               </div>
            </div>
            : ""}
    </div>
    )
}
