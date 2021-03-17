import React from 'react';
import styled from 'styled-components';
import '../navLink/NavLink.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../page/dashboard/Dashboard';

const Home = () => {
    return (
        <MainWrapper>
            <HomeWrapper>
                <Dashboard />
                <Switch>
                    <Route exact path="/home/overview">
                        Overview
                    </Route>
                    <Route path="/home/new-user">
                        New User
                    </Route>
                    <Route path="/home/sales">
                        Sales
                    </Route>
                </Switch>

            </HomeWrapper>
        </MainWrapper >
    )
}

export default Home

const MainWrapper = styled.div`
    background: white;
`;
const HomeWrapper = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
`;
