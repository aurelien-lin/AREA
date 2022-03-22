import React, { useRef, useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { LogMarginer } from "./LogMarginer";
import { AccountContext } from "./AccountContext";
import axios from 'axios';
import emailjs from '@emailjs/browser';

export function Register(props) {
  const form = useRef();
  const { switchToSignin } = useContext(AccountContext);
  const [fname, setFname] = useState();
  const [mail, setMail] = useState();
  const [pwd, setPwd] = useState();
  const [confirmPwd, setConfirmPwd] = useState();

  const handleFname = (text) => {
    setFname(text);
  }

  const handleMail = (text) => {
    setMail(text);
  }

  const handlePwd = (text) => {
    setPwd(text);
  }

  const handleConfirmPwd = (text) => {
    setConfirmPwd(text);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o9ilktd', 'template_adp47hm', e.target, 'VFhVeSlGCr2-uS3L1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const regAcc = () => {
    axios.post("http://localhost:8080/user/register", {email: mail, password: pwd, name:fname})
      .then((response) => {
        if (response.data.message === 'registered') {
          switchToSignin();
        }
        if (response.data.message === 'user already exists') {
          console.log("user already exists")
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

  return (
    <BoxContainer>
      <form ref={form} onSubmit={sendEmail}>
          <Input type="text" placeholder="Full Name" value={fname} onChange={e => handleFname(e.target.value)}/>
          <Input type="email" placeholder="Email" name="user_email" value={mail} onChange={e => handleMail(e.target.value)}/>
          <Input type="password" placeholder="Password" name="password" value={pwd} onChange={e => handlePwd(e.target.value)}/>
          <Input type="password" placeholder="Confirm Password" value={confirmPwd} onChange={e => handleConfirmPwd(e.target.value)}/>
      <LogMarginer direction="vertical" margin={40} />
      <SubmitButton type="submit" onClick={regAcc}>Signup</SubmitButton>
      </form>
      <LogMarginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
