import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import file from "test.png"


function Download() {
return <a href={"./apk"} download="test.png" target="_blank">Téléchargement APK</a>
}