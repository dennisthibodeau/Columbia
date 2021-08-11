import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";

import { AuthContext } from "../Context/AuthContext";
import Header from "./Header";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../Background";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/todos");
      } else setMessage(message);
    });
  };

  return (
    <div>
      <Background />
      <Header />
      <Wrapper>
        <SignHeader>Please Signin</SignHeader>
        <StyledForm onSubmit={onSubmit}>
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
          <LoginLink to="/maphome">
            <Button renderAs="button">Login</Button>
          </LoginLink>
        </StyledForm>
      </Wrapper>
    </div>
    // <div>
    //   <Wrapper>
    //     <form onSubmit={onSubmit}>
    //       <h3>Please sign in</h3>
    //       <label htmlFor="username" className="sr-only">
    //         Username:{" "}
    //       </label>
    //       <input
    //         type="text"
    //         name="username"
    //         onChange={onChange}
    //         className="form-control"
    //         placeholder="Enter Username"
    //         required
    //       />
    //       <label htmlFor="password" className="sr-only">
    //         Password:{" "}
    //       </label>
    //       <input
    //         type="password"
    //         name="password"
    //         onChange={onChange}
    //         className="form-control"
    //         placeholder="Enter Password"
    //         required
    //       />
    //       <Link to="/maphome">
    //         <button>Login</button>
    //       </Link>
    //     </form>
    //   </Wrapper>
    // </div>
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
  /* margin-bottom: 2rem;
  border: 1px solid black;
  width: 12rem;
  height: 6rem; */
  /* background-color: rgba(255, 255, 255, 0.5); */
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
export default Login;
