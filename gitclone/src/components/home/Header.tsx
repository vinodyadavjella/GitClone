
import React from 'react';
import styled from 'styled-components'
import NavLink from '../navLink/NavLink';

const Header = () => {
    return (
        <React.Fragment>

            <InnerdivWrapper>
                <ContentWrapper>
                    <MainContentWrapper>
                        <LogoWrapper>
                            <img
                                src='https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg'
                                alt='workflow logo'
                            />
                        </LogoWrapper>
                        <TopNavWrapper>
                            <NavLink
                                to="/"
                                className="baseStyle"
                                activeClassName="activeStyle"
                                inactiveClassName="inactiveStyle"
                            >
                                Dashboard
                                </NavLink>
                            <NavLink
                                to="/team"
                                className="baseStyle"
                                activeClassName="activeStyle"
                                inactiveClassName="inactiveStyle"
                            >
                                Team
                                </NavLink>
                            <NavLink
                                to="/projects"
                                className="baseStyle"
                                activeClassName="activeStyle"
                                inactiveClassName="inactiveStyle"
                            >
                                Projects
                                </NavLink>
                            <NavLink
                                to="/calendar"
                                className="baseStyle"
                                activeClassName="activeStyle"
                                inactiveClassName="inactiveStyle"
                            >
                                Calendar
                                </NavLink>
                        </TopNavWrapper>
                    </MainContentWrapper>
                </ContentWrapper>
            </InnerdivWrapper>
        </React.Fragment>
    )
}

export default Header

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