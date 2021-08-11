import React, { useState } from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Background from "../Background";

const SingleState = (props) => {
  const [parks, setParks] = useState();

  const state = props.location.myProps.stateName;

  React.useEffect(async () => {
    await fetch("/parks/")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.data.filter((x) => x.states === state);
        setParks(filteredData);
      });
  }, []);

  return (
    <div>
      <Background />
      <Header />
      <Wrapper>
        {parks &&
          parks.map((park) => {
            return <Park park={park} key={park.id} />;
          })}
      </Wrapper>
    </div>
  );
};
const Park = ({ park }) => {
  const { fullName, url, description } = park;

  return (
    <div>
      <StateWrapper>
        <Container>
          <Name>{fullName}</Name>
          <Desc>{description}</Desc>
          <Url>{url}</Url>
        </Container>
      </StateWrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* top: 40%;
  left: 50%; */
  /* width: 300px;
  height: 145px; */
  /* z-index: 1; */
  /* transform: translate(-50%, -50%); */
  padding: 30px;
  background: rgba(255, 255, 255, 0.5);
`;

const Img = styled.img``;

const Name = styled.div`
  font-weight: bold;
  padding-bottom: 25px;
  justify-self: flex-start;
  text-decoration: underline;
`;

const Desc = styled.div`
  justify-self: center;
`;

const Url = styled.div`
  font-weight: bold;
  justify-self: center;
`;

// const Desc = styled.div`
//   font-weight: bold;
//   padding-bottom: 25px;
//   justify-self: flex-start;
// `;

// const Parks = styled.div``;
// const LatLong = styled.div``;

export default SingleState;
