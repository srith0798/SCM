import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const UserLogo = styled.img`
  width: 55px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 7px;
`;

const UserName = styled.span`
  color: #ffffff;
  font-size: 14px;
  margin: 7px 0px 0px 15px;
`;

const UserId = styled.span`
  color: #ffffff;
  font-size: 12px;
  margin: 0px 0px 0px 15px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const XmartlyLogo = styled.img`
  width: 95px;
  height: 55px;
  margin-left: 15px;
`;
const UserContainer = styled.div`
  position: absolute;
  right: 50px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Row>
        <XmartlyLogo src="/images/Logo.svg" />
        <UserContainer>
          <Row>
            <UserLogo src="/images/kakashi.png" />
            <Column>
              <UserName>John Appleased</UserName>
              <UserId>it@supportteam.com</UserId>
            </Column>
          </Row>
        </UserContainer>
      </Row>
    </HeaderContainer>
  );
}

export default Header;
