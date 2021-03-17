import React from 'react';
import styled from 'styled-components';
import NavLink from '../navLink/NavLink';

interface PageProps {
    title: string,
}

const Page: React.FC<PageProps> = ({ title }) => {
    return (
        <div>
            <header>
                <div style={{ maxWidth: "7px", paddingRight: "4px", paddingLeft: "4px", display: "flex", alignItems: "flex-end", marginLeft: "auto", marginRight: "auto" }}>
                    <h1 style={{ fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: 700, color: "rgba(17, 24, 39,1)" }}>
                        {title}
                    </h1>
                </div>
            </header>
            <main>
                <div style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}>
                    <div style={{
                        padding: "0.25rem"
                    }}>
                        <div style={{ border: "1px dashed rgba(107, 114, 128, 1)", height: "96px" }}>
                            <TopNavWrapper>
                                <NavLink
                                    to="/"
                                    className="baseStyle"
                                    activeClassName="activeStyle"
                                    inactiveClassName="inactiveStyle"
                                >
                                    Overview
                                </NavLink>
                                <NavLink
                                    to="/new-user"
                                    className="baseStyle"
                                    activeClassName="activeStyle"
                                    inactiveClassName="inactiveStyle"
                                >
                                    New User
                                </NavLink>
                                <NavLink
                                    to="/sales"
                                    className="baseStyle"
                                    activeClassName="activeStyle"
                                    inactiveClassName="inactiveStyle"
                                >
                                    Sales
                                </NavLink>
                            </TopNavWrapper>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


const TopNavWrapper = styled.div`
    margin-top: 0.9rem;
`;

export default Page
