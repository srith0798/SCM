import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import "../../assets/styles/custom.css";
import "./index";

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
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 1rem;
`;
const XmartlyLogo = styled.img`
  margin-right: 12px;
`;
const UserContainer = styled.div``;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Menu = styled.div`
  width: 35px;
  height: 5px;
  background-color: #ffffff;
  margin: 4px 0;
`;
function Header() {
  return (
    <HeaderContainer>
      <SpaceBetween>
        <div style={{ display: "flex" }}>
          <XmartlyLogo src="/images/Logo.svg" />
          <Column>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
          </Column>
        </div>
        <UserContainer>
          <Row>
            <UserLogo src="/images/kakashi.png" />
            <Column>
              <UserName>John Appleased</UserName>
              <UserId>it@supportteam.com</UserId>
            </Column>
          </Row>
        </UserContainer>
      </SpaceBetween>
    </HeaderContainer>
    // <div class="topnav">
    //   <a href="#home" class="active">
    //     Logo
    //   </a>
    //   {/* <!-- Navigation links (hidden by default) --> */}
    //   <div id="myLinks">
    //     <a href="#news">News</a>
    //     <a href="#contact">Contact</a>
    //     <a href="#about">About</a>
    //   </div>
    //   {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
    //   <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    //     <i class="fa fa-bars"></i>
    //   </a>
    // </div>
  );
}

export default Header;
