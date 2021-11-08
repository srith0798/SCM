import React from 'react'
import styled from 'styled-components'


const SidebarContainer = styled.div`
background: #102C78 0% 0% no-repeat padding-box;
opacity: 1;
width: 200px;
height: 700px;
`
const Icon = styled.img`
`
const Wrapper = styled.div`
flex-wrap: wrap;
margin: 40px 0px 0px 25px;
cursor: pointer;
`

const Heading = styled.span`
letter-spacing: 0px;
color: #8CA6F0;
opacity: 1;
margin-left: 15px;
`

function Sidebar() {
    return (
        <SidebarContainer>
            <Wrapper>
                <Icon src="/images/Transactions.svg" />
                <Heading>Transactions</Heading>
            </Wrapper>
            <Wrapper>
                <Icon src="/images/contracts.svg" />
                <Heading>Contracts</Heading>
            </Wrapper>
            <Wrapper>
                <Icon src="/images/networks.svg" />
                <Heading>Networks</Heading>
            </Wrapper>
            <Wrapper>
                <Icon src="/images/Analytics.svg" />
                <Heading>Analytics</Heading>
            </Wrapper>
            <Wrapper>
                <Icon src="/images/Alerting.svg" />
                <Heading>Alerting</Heading>
            </Wrapper>
        </SidebarContainer>
    )
}

export default Sidebar