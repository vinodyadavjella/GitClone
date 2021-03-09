import React, { useEffect, useState } from 'react'
import {
    UserOutlined,
    UsergroupAddOutlined,
    EnvironmentOutlined,
    InsertRowRightOutlined,
    MailOutlined,
    LinkOutlined,
    TwitterOutlined,
    CheckOutlined
} from "@ant-design/icons";
import Avatar from 'antd/lib/avatar/avatar';
import { getGitUser_ById, UserData, repoList } from '../../serverCalls/Utils';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const BodySider = () => {

    const router = useRouteMatch()
    const { params: { id } } = router as { params: Record<string, string> }
    const [user, setUser] = useState<UserData>();
    const [userRepoList, setUserRepoList] = useState<Record<string, string> | null>(null)

    useEffect(() => {
        const getSelectedUserInfo = async () => {
            const userInfo = await getGitUser_ById(id)
            if (userInfo) {
                setUser(userInfo)
            }
        }
        getSelectedUserInfo();
    }, [id]);

    useEffect(() => {
        const getUserRepoList = async () => {
            const checkRepoList = await repoList(id)
            if (checkRepoList) {
                setUserRepoList(checkRepoList)
            }
        }
        getUserRepoList();
    }, []);
    console.log(userRepoList);
    if (!id) {
        return null
    }

    if (!user) {
        return null
    }
    return (
        <UserSectionWrapper>
            <UserDetailSectionWrapper>
                <Avatar src={user?.avatar_url} icon={<UserOutlined />} size={200} style={{ background: "white", border: "1px solid lightgray", zIndex: 1 }} />
                <h1>
                    {user?.name}
                </h1>
                {user?.login}
            </UserDetailSectionWrapper>
            <span style={{ alignItems: "flex-start" }}>
                {user.bio}
            </span>
            <div>
                <button>Follow</button>
                <button>...</button>
            </div>
            <div>
                <UsergroupAddOutlined />
                <span>
                    {user.followers} followers . {user.following} following
                    </span>
            </div>
            <div>
                <InsertRowRightOutlined />
                {user.company}
            </div>
            <div>
                <EnvironmentOutlined />
                {user.location}
            </div>
            <div>
                <MailOutlined />
                {user.email}
            </div>
            <div>
                <LinkOutlined />
                {user.blog}
            </div>
            <div>
                <TwitterOutlined />
                {user.twitter_username}
            </div>
        </UserSectionWrapper >
    )
}

export default BodySider

const UserSectionWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin: 20px 60px;
    align-items: flex-start;
    flex:0.2;
`;

const UserDetailSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
