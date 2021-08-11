import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Landingpage from "./LandingPage";
import styled from "styled-components";
import Globalstyles from "./Globalstyles";
import MapHome from "./Map/MapHome";
import SingleState from "./Map/SingleState";

function App() {
  return (
    <div>
      <Router>
        <Globalstyles />
        <Wrapper>
          <Main>
            <Switch>
              <Route exact path="/">
                <Landingpage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>

              <Route component={MapHome} path="/maphome" />
              <Route to="/singlestate" component={SingleState} />
              {/* ^^^Why do the components only work when coded this way?? ^^^ */}
            </Switch>
          </Main>
        </Wrapper>
      </Router>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const LandingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  /* height: auto; */
  /* background-color: black; */
`;

export default App;
