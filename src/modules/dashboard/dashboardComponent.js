import React from "react";
import styled from "styled-components";
import Utility from "../../utility";
import HeaderComponent from "../header/header";
import DesktopSideMenu from "./sidebar";
import MobileSideMenu from "./mobileSidebar";
import ContractDetails from "../Contract/contractDetails/contractDetails";
import Contract from "../Contract/contract";
import TransactionDetails from "../TransactionDetails/transactionDetails";
import TransactionList from "../transactions/transactionList";
import Network from "../Network/network";
import Analytics from "../Analytics/analytics"

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

//Replace Under Development with component once developed-
const HomeComponent = (props) => {
  return (
    <Container>
      {Utility.isMenuActive("/contract") &&
        (Utility.isMenuActive("/contract-details") ? (
          <ContractDetails />
        ) : (
          <Contract />
        ))}
      {Utility.isMenuActive("/transaction") &&
        (Utility.isMenuActive("/transaction-details") ? (
          <TransactionDetails />
        ) : (
          <TransactionList />
        ))}

      {Utility.isMenuActive("/analytics") && (
        <Analytics />
      )}
      {/* {Utility.isMenuActive("/products") &&
        (Utility.isMenuActive("/add") ? (
          <AddProductComponent />
        ) : (
          <ProductComponent />
        ))} */}

      {Utility.isMenuActive("/network") && <Network />}

      {/* {Utility.isMenuActive("/settings") && <SettingComponent />} */}
    </Container>
  );
};

const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* overflow-y: hidden;
  overflow-x: hidden; */
  height: 100vh;
`;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const ScrollableDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: auto;
`;

const dashboardComponent = (props) => {
  return (
    <>
      <DashboardContainer>
        <HeaderComponent {...props} />
        <HomeContainer>
          <DesktopSideMenu {...props} />
          <MobileSideMenu {...props} />
          <ScrollableDiv>
          <HomeComponent {...props} />
          </ScrollableDiv>
        </HomeContainer>
      </DashboardContainer>
    </>
  );
};
export default dashboardComponent;
