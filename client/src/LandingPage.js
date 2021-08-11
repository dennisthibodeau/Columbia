import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "./assets/columbia04.png";
import logo from "./assets/banner.png";
import sky from "./assets/White.png";

import Background from "./Background";

const Landingpage = () => {
  return (
    <div>
      <Background />
      <Wrapper>
        <Container>
          {/* <ImgWrapper> */}
          <SkyImg src={sky} />
          <ColImg src={image} />
          <LogoImg src={logo} />
          {/* </ImgWrapper> */}

          <BtnContainer>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </BtnContainer>
        </Container>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
`;
const ImgWrapper = styled.div``;

const SkyImg = styled.img`
  display: flex;
  height: 575px;
  width: 1000px;
  background-position: center;
  position: absolute;
  margin-left: 50px;
`;

const ColImg = styled.img`
  display: flex;
  height: 400px;
  width: 300px;
  background-position: center;
  position: absolute;
  margin-top: 10vh;
  margin-left: 0vw;
`;

const LogoImg = styled.img`
  display: flex;
  height: 170px;
  width: 800px;
  position: absolute;
  margin-top: 43vh;
  margin-left: 0vw;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const BtnContainer = styled.div`
  /* margin-top: 250px; */
  justify-content: space-evenly;
  margin-left: -25px;
`;

export const Button = styled.button`
  font-family: "SignPainter";
  font-size: 3rem;
  width: 12rem;
  /* left: 50vw; */
  /* align-items: flex-end; */
  color: rgba(0, 0, 0, 0.79);
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  transition: all 200ms;
  cursor: pointer;
  /* margin-top: 150px; */
  /* position: absolute; */
  margin-top: 60vh;
  margin-left: 10px;

  &:hover {
    background-color: slategray;
    border: 1px solid transparent;
    color: white;
  }
`;

export default Landingpage;
