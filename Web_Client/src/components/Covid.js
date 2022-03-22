import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Covid(props) {
    const [Covid, setCovid] = useState(props.state);
    const [City, setCity] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {

        if (SButton === 1) {
            axios.post("http://localhost:8080/area_gmail/covid", {country: City, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        }
        if (SButton === 2) {
            axios.post("http://localhost:8080/area_sendgrid/covid", {country: City, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        }
        if (SButton === 3) {
            axios.post("http://localhost:8080/area_spotify/covid", {country: City, mail: User})
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
                <div className="txt" className={"ButtonOfTxt"}>{props.name} </div>
            </button>
        )
    }


    const SwitchButton = (props) => {
        return(
        <button className={Covid === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setCovid(!Covid); props.onChangeState(!Covid)}}>
            <div className="txt" className={"ButtonOfTxt"}>{Covid === true ? "ON" : "OFF"}</div>
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
               <div className="txt" style={{textAlign: "center"}}><br/> Covid </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {Covid === true ? <div className="CovidInput" ><Input type="hidden"  style={{color: "#395e7e", backgroundColor: "#395e7e"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fournit les données covid d'un Pays choisi
               </div>
               <br/>
           </div>
       </div>
       {Covid === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className="CovidInput" ><Input type="txt" placeholder="Pays" value={City} onChange={e => handleCity(e.target.value)} /></div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le nom d'un pays puis la réaction. ex:France
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
