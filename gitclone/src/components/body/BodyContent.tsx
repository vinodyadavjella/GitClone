
import React from 'react';
import styled from 'styled-components';
import BodySider from '../home/BodySider';
import Home from '../home/Home';

const BodyContent = () => {
    return (
        <BodyWrapper>
            <Home />
            <BodySider />
        </BodyWrapper>
    )
}

export default BodyContent

const BodyWrapper = styled.div`

`;
