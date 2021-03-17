import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import Page from './components/page/Page';
import Home from './components/home/Home';
import Header from './components/home/Header';


function App() {
  return (
    <Apps>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team">
          <Page title="Team" />
        </Route>
        <Route path="/projects">
          <Page title="Projects" />
        </Route>
        <Route path='/calendar'>
          <Page title="Calendar" />
        </Route>
        <Redirect to="/home/overview" />
      </Switch>
    </Apps>
  );
}

export default App;

const Apps = styled.div`
margin: *;
`;
