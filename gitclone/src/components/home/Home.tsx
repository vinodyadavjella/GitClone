import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

const Home = () => {
    const [current, setCurrent] = useState('mail');

    const handleClick = (e: any) => {
        console.log('click ', e.key);
        setCurrent(e.key)
    };
    return (
        <React.Fragment>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ position: "fixed", width: "100%", height: "50px" }}>
                {/* <MenuWrapper>
            </MenuWrapper> */}
                <Menu.Item key="mail" icon={<MailOutlined />} style={{ marginLeft: "25%" }}>
                    Navigation One
        </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    Navigation Two
        </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
          </a>
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

const MenuWrapper = styled.div`
    display:flex;
    
`;

export default Home
