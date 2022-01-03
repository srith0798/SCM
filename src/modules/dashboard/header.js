import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";
import { sessionManager } from "../../managers/sessionManager";
import utility from "../../utility";

function Header(props) {
  console.log(props);
  const [openHumburger, setOpenHumburger] = useState(true);
  const getUserAccountAddress = () => {
    let user = "";
    user = sessionManager.getDataFromCookies("accountAddress");
    if (user) user = utility.truncateTxnAddress(user);
    console.log(user);
    return user;
  };
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
        {sessionManager.getDataFromCookies("accountAddress") ? (
          <XDCContainer>
            <div style={{ marginRight: "10px" }}>1450 XDC</div>
            <UserContainer>
              {getUserAccountAddress()}
              <UserLogo src="/images/user-round.png" />
            </UserContainer>
          </XDCContainer>
        ) : (
          <Button onClick={props.getCurrentUserDetails}>Connect Wallet</Button>
        )}
      </SpaceBetween>
    </HeaderContainer>
  );
}

export default Header;

const UserLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
  }
`;
const XDCContainer = styled.div`
  background: #324988;
  display: flex;
  color: white;
  border-radius: 5px;
  align-items: center;
  padding: 0 0 0 10px;
`;

const UserContainer = styled.div`
  width: 190px;
  background: #3e579a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid white;
  background: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 5px 20px 5px 20px;
`;
