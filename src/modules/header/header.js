import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import "../../assets/styles/custom.css";

const UserLogo = styled.img`
  width: 55px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 7px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 5px;
  @media (max-width: 768px) {
    padding-top: 42px;
  }
`;
const XmartlyLogo = styled.img`
  margin-right: 17px;
`;
const GridLogo = styled.img`
  margin-right: 17px;
  @media (max-width: 768px) {
    display: none;
   
  
`;
const UserContainer = styled.div``;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

function Header() {
  const [openHumburger, setOpenHumburger] = useState(true);

  return (
    <HeaderContainer>
      <SpaceBetween>
        <div style={{ display: "flex", marginLeft: "12px" }}>
          <GridLogo
            src="/images/Grid.svg"
            onClick={() => setOpenHumburger(openHumburger)}
          />
          <XmartlyLogo src="/images/Logo.svg" />
        </div>
        <UserContainer>
          <Row>
            <UserLogo src="/images/kakashi.png" />
          </Row>
        </UserContainer>
      </SpaceBetween>
    </HeaderContainer>
  );
}

export default Header;
