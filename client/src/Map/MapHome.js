import React from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MapInfo from "./MapInfo";
import Header from "../Components/Header";
import WaveBackground from "../WaveBackground";

const MapHome = () => {
  return (
    <div>
      <WaveBackground />
      <Header />
      <ShareContainer>
        <ShareButton>Share Map</ShareButton>
        <ShareButton>Import Map</ShareButton>
      </ShareContainer>
      <MapInfo />
    </div>
  );
};

const State = ({ state }) => {
  const { _id } = state;

  return <Container to={`/allstates/${_id}`}></Container>;
};

const Container = styled(NavLink)``;

const ShareContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-left: 50%;
`;

const ShareButton = styled.button`
  margin-left: 10px;
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

export default MapHome;
