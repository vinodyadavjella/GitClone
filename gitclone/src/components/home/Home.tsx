import React from 'react';
import NavLink from '../navLink/NavLink';
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

const MainNavWrapper = styled.nav`
    border: 1px solid rgba(209, 213, 219, 1);
    background : white;
`;

const InnerdivWrapper = styled.div`
    maxWidth: 7xl;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem; 
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 35px;
`;

const MainContentWrapper = styled.div`
    display: flex;
`;

const LogoWrapper = styled.div`
    display: flex;
    flexShrink: 0;
    align-items: center;
    > img{
        width: 20px;
        height: 20px; 
        display: block;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        padding-top: 0.25rem;
    }
`;

const TopNavWrapper = styled.div`
    margin-top: 0.9rem;
`;

const HomeWrapper = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
`;
