import './Home.css'
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const {spotyfy, spotifyData} = location.state
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const [Spotify, setspotify] = useState(spotyfy);
  const setConnect = useState(true);

  const SwiRchButton = (props) => {
    return(
      <div className='center'>
        <div className={"WidButton"}>
            <button className={ "ButtonOf"} title=''
             onClick={() => {if(props.type === true){ props.onChangeState(false) } else props.onChangeState(true)}}>
                <div className={"ButtonOfTxt"}> {"retourner à la page d'accueil"} {props.title}</div>
            </button>
        </div>
      </div>
    )
}

const SpotifyButton = (props) => {

  return(
    <div className='center'>
      <div className={"WidButton"}>
          <button className={[props.type === true? "Button" : "ButtonOf"]} title='Spotify'
           onClick={() => {window.open("http://127.0.0.1:8080/spotify/authorize", "_blank")}}>
              <div className={[props.type === true? "ButtonTxt" : "ButtonOfTxt"]}> {"Spotify"} {props.title}</div>
          </button>
      </div>
    </div>
  )
}


  const APKClick = () => {
    window.open("http://localhost:8080/client.apk")
  }

  const APKButton = (props) => {
    return(
      <div className='center'>
        <div className={"WidButton"}>
          <button className={ "ButtonOf"} title='APK'
            onClick={() => {window.open("http://127.0.0.1:8080/client.apk", "_blank")}}>
              <div className={"ButtonOfTxt"}> {"Télécharger APK"} {props.title}</div>
          </button>
        </div>
      </div>
    )
  }


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img src={logo} className="logo" alt="logo" />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Home"
                state={{spotyfy: Spotify, spotifyData: spotifyData}}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Profile"
                state={{spotyfy: Spotify, spotifyData: spotifyData}}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Docs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Docs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="HomeContainer">
        <div className={"HomeLeft", "test"}>
          <div className='title'>Connection au services</div>
          <div className="widget" >
            <SwiRchButton type={false} onChangeState={(newState) => (setConnect('false')), () => navigate("/")} />
            <SpotifyButton type={Spotify} onChangeState={(newState) => (setConnect('false'))} />
            <APKButton onClick={APKClick} />
          </div>
        </div>
        <div className={"HomeLeft", "test"}>
        <div className='title'>description</div>
        <div className="widget, center">
          Epitech Project <br/>
          The goal of this project is to discover, as a whole, the software platform that you have chosen through thecreation of a business application.To do this, you must implement a software suite that functions similar to that of IFTTT and/or Zapier.This software suite will be broken into three parts :
          <br/>•An application server to implement all the features listed below (seeFeatures)
          <br/>•A web client to use the application from your browser by querying the application server
          <br/>•A mobile client to use the application from your phone by querying the application server
        </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
