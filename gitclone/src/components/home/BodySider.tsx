import React, { useEffect, useState } from 'react'
import {
    UserOutlined,
    UsergroupAddOutlined,
    EnvironmentOutlined,
    InsertRowRightOutlined,
    MailOutlined,
    LinkOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import Avatar from 'antd/lib/avatar/avatar';
import { getGitUser_ById, UserData } from '../../serverCalls/Utils';
import { useRouteMatch } from 'react-router-dom';

const BodySider = () => {

    const router = useRouteMatch()
    const { params: { id } } = router as { params: Record<string, string> }
    const [user, setUser] = useState<UserData>();

    useEffect(() => {
        const getSelectedUserInfo = async () => {
            const userInfo = await getGitUser_ById(id)
            if (userInfo) {
                setUser(userInfo)
            }
        }
        getSelectedUserInfo();
    }, [id]);
    if (!id) {
        return null
    }

    if (!user) {
        return null
    }
    console.log(user)
    return (
        <div>
            <Avatar src={user?.avatar_url} icon={<UserOutlined />} size={300} style={{ background: "white", border: "1px solid lightgray", zIndex: 1 }} />
            <div>
                <div>
                    <h2>
                        {user?.name}
                    </h2>
                    {user?.login}
                </div>
                <span>
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
            </div>
        </div>
    )
}

export default BodySider
