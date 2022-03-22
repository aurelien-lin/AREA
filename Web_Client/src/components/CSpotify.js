import React, {useState} from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function CSpotify(props) {
    const [cspotify, setcspotify] = useState(props.state);
    const [username, setusername] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {
       if (SButton === 1) {
        axios.post("http://localhost:8080/area_gmail/following", {token: "", mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 2) {
        axios.post("http://localhost:8080/area_sendgrid/following", {token: "", mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 3) {
        axios.post("http://localhost:8080/area_spotify/following", {token: "", mail: User})
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
        <button className={cspotify === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setcspotify(!cspotify); props.onChangeState(!cspotify)}}>
            <div className="txt" className={"ButtonOfTxt"}>{cspotify === true ? "ON" : "OFF"}</div>
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
               <div className="txt" style={{textAlign: "center"}}><br/> Spotify</div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {cspotify === true ? <div className="cspotifyInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni son nombre d'abonné.
               </div>
               <br/>
           </div>
       </div>
       {cspotify === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}><br/> Paramètres </div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="cspotifyInput" ><Input type="hidden" value={username} style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} onChange={e => handleusername(e.target.value)} /></div>
                   <div className="txt">
                        Utilisation: <br/>
                        Cliquez sur la reaction voulu.
                   </div>
                   <br/>
               </div>
            </div>
            : ""}
    </div>
    )
}
