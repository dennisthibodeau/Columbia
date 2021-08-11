import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const AllStates = () => {
  const [states, setStates] = React.useState([]);

  return (
    <Wrapper>
      {states.map((state) => {
        return <State state={state} key={state.id} />;
      })}
    </Wrapper>
  );
};

const State = ({ state }) => {
  const { fullName, id } = state;

  return (
    <Container to={`/states/${id}`}>
      <Name>{fullName}</Name>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
  width: 250px;
  margin: 15px 50px;
  padding: 15px 50px;
  cursor: pointer;
`;

const Name = styled.div`
  color: black;
  padding-bottom: 25px;
  font-size: 32px;
  font-weight: bolder;
`;

export default AllStates;
