import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Background from "../Background";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <div>
      <Background />
      <Header />
      <Wrapper>
        <SignHeader>Register</SignHeader>
        <StyledForm onSubmit={onSubmit}>
          <Input
            type="text"
            value={FormData.firstname}
            placeholder="First Name"
            required
          ></Input>
          <Input
            type="text"
            value={FormData.lastname}
            placeholder="Last Name"
            required
          ></Input>
          <Input
            type="text"
            value={FormData.email}
            placeholder="Enter E-mail"
            required
          ></Input>
          <Input
            type="text"
            value={FormData.password}
            placeholder="Enter Password"
            required
          ></Input>
          <Input
            type="text"
            value={FormData.password}
            placeholder="Confirm Password"
            required
          ></Input>
          <LoginLink to="/maphome">
            <Button renderAs="button">Register</Button>
          </LoginLink>
        </StyledForm>
      </Wrapper>
    </div>
  );
};

const SignHeader = styled.h2`
  text-align: center;
  font-family: "SignPainter";
  /* text-align: middle; */
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

const LoginLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  font-family: "SignPainter";
`;

const Button = styled.button`
  font-family: "SignPainter";
  font-size: 3rem;
  width: 12rem;
  align-items: flex-end;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  text-decoration: none;
  transition: all 200ms;
  cursor: pointer;

  &:hover {
    background-color: slategray;
    border: 1px solid transparent;
    color: white;
  }
`;

export default Register;
