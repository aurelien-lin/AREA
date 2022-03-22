import './Home.css'
import '../style.css'
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from '../assets/logo.svg';
import Covid from '../components/Covid';
import Money from '../components/Money';
import Bitcoin from '../components/Bitcoin';
import Github from '../components/Github';
import News from '../components/News';
import Time from '../components/Time';
import Weather from '../components/Weather';
import Apollution from '../components/Apollution';
import Geocoding from '../components/Geocoding';
import UV from '../components/UV.js';
import Search from '../components/Search.js';
import SWG from '../components/Search_Google';
import CSpotify from '../components/CSpotify';
import LoL from '../components/LoL';

const NotConnected = (props) => {
  return(
      <div className={"WidNot"} style={{marginTop: "10px"}}>
          <div className={"WidNotDysplay"} style={{marginTop: "3px", marginBottom: "10px"}}>
              <div className={"txt"} >{props.name}</div>
              {/* <div className={"txt"} >need to be connected to {props.need}</div> */}
              <div className={"widSpace"} >
                  <button  className={"ButtonOf"} title='NotConnected' onPress={() => {props.onChangeState('true')}} >
                      <div className={"ButtonOfTxt"}>NEED CONNECT</div>
                  </button>
              </div>
              {/* <div className={"txt"} >short description: {'\n'} {props.description}</div> */}
          </div>
      </div>
  )
}

function Home() {
  const location = useLocation();
  const {spotifyData, user} = location.state
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [Spotify, setSpotify] = useState(location.state.spotyfy);
  const [SpotifyData, setSpotifyData] = useState(location.state.spotifyData);
  
  
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
                state={{spotyfy: Spotify, spotifyData: SpotifyData}}
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
                to={{pathname:"/Profile"}}
                state={{spotyfy: Spotify, spotifyData: SpotifyData }}
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
      {/* <div className="HomeContainer"> */}
        <div className={"HomeLeft", "test"}>
        <div className="widget">
          <Covid state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Money state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Bitcoin state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Github state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <News state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Time state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Weather state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Apollution state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Geocoding state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <UV state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <Search state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <SWG state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <LoL state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
          <CSpotify state={spotifyData} User={user} onChangeState={(newState) => {setSpotifyData(newState)}}/>
        </div>
        </div>
    </>
  );
}

export default Home;
