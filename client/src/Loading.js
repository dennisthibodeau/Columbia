import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <StyledLoader>Please respect all nature and wildlife</StyledLoader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledLoader = styled.div`
  font-size: larger;
  transition-duration: 5000ms;
`;

export default Loading;
