import React from "react"
import styled from 'styled-components'
import { Column } from 'simple-flexbox'

const Logo = styled.img`
width: 181px;
height: 57px;
`
const Heading = styled.span`
margin-top: 30px;
text-align: left;
font-size: 28px;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`
const Content = styled.span`
text-align: left;
font-size: 12px;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
margin-top:20px;
`
const SideView = styled.div`
position: absolute;
top: 25%;
left: 60px;
`

const MainContainer = styled.div`
background: #102C78 0% 0% no-repeat padding-box;
opacity: 1;
height: 753px;
width: 500px;
`

export default function LoginSideView() {
    return (
        <MainContainer>
            <SideView>
                <Column>
                    <Logo src="/images/Logo.svg" />
                    <Heading>Manage your <br />Smart Contracts</Heading>
                    <Content>Lorem ipsum dolor sit amet, consectetur adiscing elit,<br />
                        sed do eiusmod tempor incididunt ut labore et dolore<br />
                        magna aliqua</Content>
                </Column>
            </SideView>
        </MainContainer>
    )
}