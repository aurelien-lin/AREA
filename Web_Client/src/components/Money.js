import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Money(props) {
    const [Money, setMoney] = useState(props.state);
    const [Devise, setDevise] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {
        if (SButton === 1)
            axios.post("http://localhost:8080/area_gmail/Money", {money: Devise, mail: User})
            .them(() => {

            })
        .catch((err) => console.log(err))
        if (SButton === 2)
            axios.post("http://localhost:8080/area_sendgrid/Money", {money: Devise, mail: User})
            .them(() => {

        })
        .catch((err) => console.log(err))
        if (SButton === 3)
            axios.post("http://localhost:8080/area_spotify/Money", {money: Devise, mail: User})
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
        <button className={Money === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setMoney(!Money); props.onChangeState(!Money)}}>
            <div className="txt" className={"ButtonOfTxt"}>{Money === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handleDevise = (Txt) => {
        setDevise(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}><br/> Money </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {Money === true ? <div className="MoneyInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni le taux de change de la devise choisi
               </div>
               <br/>
           </div>
       </div>
       {Money === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className="MoneyInput" ><Input type="txt" placeholder="Devise" value={Devise} onChange={e => handleDevise(e.target.value)} /></div>
                   <div className={"WidButton"}>
                        <SelectButton name={"Gmail"} No={1}/>
                        <SelectButton name={"Sendgrid"} No={2}/>
                        <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le nom d'une devise puis la réaction. ex usd
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
