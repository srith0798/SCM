import React from "react";
import styled from "styled-components";

import Utility from "../../utility";

import HeaderComponent from "../header/header";

import DesktopSideMenu from "../sidebar/sidebar";
import MobileSideMenu from "../sidebar/mobileSidebar";
/////////////////////////////

import ContractDetails from "../contractDetails/contractDetails";
import Contract from "../Contract/contract";
import TransactionDetails from "../TransactionDetails/transactionDetails";
import TransactionList from "../transactions/transactionList";
import Network from "../Network/network";

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

      {/* {Utility.isMenuActive("/content") &&
        (Utility.isMenuActive("/add") ? (
          <ComponentAdd />
        ) : (
          <ContentComponent />
        ))} */}
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
  flex-direction: row;
  overflow-y: hidden;
  height: 100%;
`;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  // display: flex;
  // flex-direction: column;
  // overflow-y: hidden;
  // overflow-x: hidden;
`;

const dashboardComponent = (props) => {
  return (
    <>
      <HeaderComponent {...props} />
      <DashboardContainer>
        <DesktopSideMenu {...props} />
        <MobileSideMenu {...props} />
        <HomeContainer>
          <HomeComponent {...props} />
        </HomeContainer>
      </DashboardContainer>
    </>
  );
};
export default dashboardComponent;
