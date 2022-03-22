import React, { useState } from "react";
import axios from 'axios';
import "../pages/Home.css";
import { Input } from "./Common";


export default function Search(props) {
    const [search, setsearch] = useState(props.state);
    const [searchQuery, setsearchQuery] = useState("");
    const [SButton, setSButton] = useState(0);
    const User = useState(props.User);


   const Area = () => {
       if (SButton === 1) {
        axios.post("http://localhost:8080/area_gmail/search", {searchQuery: searchQuery, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 2) {
        axios.post("http://localhost:8080/area_sendgrid/search", {searchQuery: searchQuery, mail: User})
        .them(() => {

        })
        .catch((err) => console.log(err))
       }
       if (SButton === 3) {
        axios.post("http://localhost:8080/area_spotify/search", {searchQuery: searchQuery, mail: User})
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
        <button className={search === true ? "Button" : "ButtonOf"} title='GoRegister'  onClick={() => {setsearch(!search); props.onChangeState(!search)}}>
            <div className="txt" className={"ButtonOfTxt"}>{search === true ? "ON" : "OFF"}</div>
            {props.state}
        </button>
        )
    }

    const handlesearchQuery = (Txt) => {
        setsearchQuery(Txt)
    }

    return (
        <div className="HomeContainer">
           <div className={"widView"}>
               <div className={"widSpace"}>
               <div className="txt" style={{textAlign: "center"}}><br/> Search</div>
               <div className={"WidButton"}>
                   <SwitchButton></SwitchButton>
               </div>
               {search === true ? <div className="searchInput" ><Input type="hidden"  style={{color: "#D3D3D3", backgroundColor: "#D3D3D3"}} /></div> : ""}
               <div className="txt">
                    Description: <br/>
                    Fourni le résultat d'une recherche sur youtube.
               </div>
               <br/>
           </div>
       </div>
       {search === true ?
            <div className={"widView"}>
                <div className={"widSpace"}>
                   <div className="txt" style={{textAlign: "center"}}> Paramètres </div>
                   <div className="searchInput" ><Input type="txt" placeholder="recherche" value={searchQuery} onChange={e => handlesearchQuery(e.target.value)} /></div>
                   <div className={"WidButton"}>
                       <SelectButton name={"Gmail"} No={1}/>
                       <SelectButton name={"Sendgrid"} No={2}/>
                       <SelectButton name={"Spotify"} No={3}/>
                   </div>
                   <div className="txt">
                        Utilisation: <br/>
                        remplissez le champ avec une recherche.
                   </div>
               </div>
            </div>
            : ""}
    </div>
    )
}
