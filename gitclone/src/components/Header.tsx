import React, { useState } from 'react'
import styled from 'styled-components';
import { Avatar } from 'antd';
import { UserOutlined, SearchOutlined, BellOutlined, CaretDownOutlined, PlusOutlined } from "@ant-design/icons";

interface HeaderProps {
    onSearch: (key: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [inputSearch, setInputSearch] = useState("");
    const handleSearchInput = (e: any) => {
        setInputSearch(e.target.value)
    }

    const handleSeachClick = async () => {
        if (!inputSearch || inputSearch.trim() === '') {
            throw new Error('Search Input missing')
        }
        onSearch(inputSearch)
    }

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <Avatar src={"/assets/images/GitHub_Icon.svg"} style={{
                    backgroundColor: "transparent", width: "85px", height: "40px"
                }} />
                <HeaderSearchInput>
                    <input onChange={handleSearchInput} value={inputSearch} placeholder='Search' type='text' />
                    <SearchIconWrapper onClick={handleSeachClick} />
                </HeaderSearchInput>
                <HeaderLeftText>
                    <span>Pull requests</span>
                    <span>Issues</span>
                    <span>Marketplace</span>
                    <span>Explore</span>
                </HeaderLeftText>
            </HeaderLeft>
            <HeaderRight>
                <BellOutlined />
                <HeaderRightUser>
                    <PlusOutlined />
                    <CaretDownOutlined />
                </HeaderRightUser>
                <HeaderRightUser>
                    <Avatar size={30} icon={<UserOutlined />} />
                    <CaretDownOutlined />
                </HeaderRightUser>
            </HeaderRight>
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    position: sticky;
    top:0;
    z-index:100;
    background-color: #101820FF;
    height:50px;
`;
const HeaderLeft = styled.div`
    align-item: center;
    height: 40px;
    margin: 5px;
    align-items: center;
    justify-content: space-around;
    display: flex;
    margin-left:20px;
`;

const HeaderSearchInput = styled.div`
    display:flex;
    align-item:center;
    width:100%;
    border:1px solid lightgray;
    margin: 20px;
    > input{
        flex:1;
        border:none;
        height:20px;
         :focus{
            outline:blue;
        }
    }
`;

const SearchIconWrapper = styled(SearchOutlined)`
    width:20px !important;
    background-color: white;
    border-left: 1px solid lightgray;
    color: gray;
    height: 20px;
    align-items:center;
    display: flex;

`;

const HeaderLeftText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    > span {
        color: white;
        font-size:10px;
    }
`;

const HeaderRight = styled.div`
    align-items: center;
    height: 40px;
    color: white;
    display: flex;
    gap: 10px;
`;

const HeaderRightUser = styled.div`
    align-items: center;
`;