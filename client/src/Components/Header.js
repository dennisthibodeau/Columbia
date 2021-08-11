import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import home from "../assets/11.png";
import compass from "../assets/10.png";
import fire from "../assets/12.png";

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Title>Columbia</Title>
      </StyledLink>
      <NavBar>
        <ImgLink to="/" class>
          <Img src={home}></Img>
        </ImgLink>
        <ImgLink to="/maphome">
          <Img src={compass}></Img>
        </ImgLink>
        <ImgLink to="/login">
          <Img src={fire}></Img>
        </ImgLink>
      </NavBar>
    </Wrapper>
  );
};

//import current user

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: center;
  /* height: auto; */
  /* background-color: black; */
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: sign;
  color: black;
  font-size: larger;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  &.active.navitem {
    border-bottom: 1px solid black;
  }
  /* position: absolute;
  left: 0; */
`;
const NavBar = styled.div`
  display: flex;
  /* align-self: flex-end;
  justify-self: flex-end; */
  /* justify-content: space-between; */
  /* position: absolute;
  left: 0;
  top: 20vh; */
`;

const Img = styled.img`
  height: 80px;
  width: 80px;
`;

const ImgLink = styled(NavLink)``;

const Title = styled.div`
  font-family: "wildfont";
  color: rgba(0, 0, 0, 0.75);
  font-size: 150px;
  margin: 1rem 0;
  border-bottom: none;
  /* background-color: rgba(255, 255, 255, 0.5); */
`;

export default Header;
