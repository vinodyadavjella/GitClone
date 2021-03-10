import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { SnippetsOutlined, WalletOutlined, ReadOutlined, BorderOutlined } from '@ant-design/icons';



const Home = () => {
    const [current, setCurrent] = useState('overview');

    const handleClick = (e: any) => {
        console.log('click ', e.key);
        setCurrent(e.key)
        if (e.key === 'overview') {
            console.log("2")
        }
        if (e.key === 'repositories') {
            console.log("3")
        }
    };


    return (
        <React.Fragment>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ position: "fixed", width: "100%", height: "50px" }}>
                <Menu.Item key="overview" icon={<ReadOutlined />} style={{ marginLeft: "30%" }}>
                    Overview
                </Menu.Item>
                <Menu.Item key="repositories" icon={<WalletOutlined />}>
                    Repositories
                </Menu.Item>
                <Menu.Item key="projects" icon={<SnippetsOutlined />}>
                    Projects
                </Menu.Item>
                <Menu.Item key="packages" icon={<BorderOutlined />}>
                    Packages
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

const MenuWrapper = styled.div`
    display:flex;
    
`;

export default Home
