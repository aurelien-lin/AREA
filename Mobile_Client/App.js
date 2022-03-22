
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Register from "./src/components/register/register";
import Login from "./src/components/login/login";
import Profil from "./src/components/profile/Profile";
import Dashboard from "./src/components/dashboard/dashboard";
import Welcome from "./src/components/welcome/welcome";

export default function App() {
  const [Page, setPage] = useState(0);

  const PrintScreen = () => {
    if (Page === 0) {
      return(
        <Welcome page={Page}  onChangeState={(newState) => {setPage(newState)}}/>
      )
    }else if (Page === 1) {
      return(
        <Register page={Page}  onChangeState={(newState) => {setPage(newState)}}/>
      )
    }else if (Page === 2) {
      return(
        <Login page={Page}  onChangeState={(newState) => {setPage(newState)}}/>
      )
    }else  {
      return(
        <Dashboard page={Page}  onChangeState={(newState) => {setPage(newState)}}/>
      )
    }
  }

  return (
    <>
      <PrintScreen/>
    </>
  );
}
