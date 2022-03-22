import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { LogMarginer } from "./LogMarginer";
import { AccountContext } from "./AccountContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [mail, setMail] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();

  const handleMail = (text) => {
    setMail(text);
  }

  const handlePwd = (text) => {
    setPwd(text);
  }

  const logAcc = () => {
    axios.post("http://localhost:8080/user/login", {email: mail, password: pwd})
    .then(response => {
      if (response.data.message === 'authentificated') {
        navigate("/Home", {state:{spotyfy: "", spotifyData: false, user: mail}})
      }
      if (response.data.message === 'incorrect pwd') {
        console.log("incorrect pwd")
      }
      if (response.data.message === 'no user with that email address') {
        console.log("incorrect mail")
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={mail} onChange={e => handleMail(e.target.value)} />
        <Input type="pwd" placeholder="Password" value={pwd} onChange={e => handlePwd(e.target.value)} />
      </FormContainer>
      <LogMarginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <LogMarginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={logAcc}>Signin</SubmitButton>
      <LogMarginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
