import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Github(props) {
    const [Github, setGithub] = useState(props.state);
    const [username, setusername] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {
        if (SButton === 1) {
            axios.post("http://localhost:8080/area_gmail/Github", {user: username, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        }
        if (SButton === 2) {
            axios.post("http://localhost:8080/area_sendgrid/Github", {user: username, mail: User})
            .them(() => {

            })
            .catch((err) => console.log(err))
        }
        if (SButton === 3) {
            axios.post("http://localhost:8080/area_spotify/Github", {user: username, mail: User})
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
        <button className={Github === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setGithub(!Github); props.onChangeState(!Github)}}>
            <div className="txt" className={"ButtonOfTxt"}>{Github === true ? "ON" : "OFF"}</div>
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
               <div className="txt" style={{textAlign: "center"}}><br/> Github </div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {Github === true ? <div className="GithubInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni le nombre de repo publique.
               </div>
               <br/>
           </div>
       </div>
       {Github === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className="GithubInput" ><Input type="txt" placeholder="Username" value={username} onChange={e => handleusername(e.target.value)} /></div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation: <br/>
                        Remplissez le nom d'un utilisateur. ex:Rllosa
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
