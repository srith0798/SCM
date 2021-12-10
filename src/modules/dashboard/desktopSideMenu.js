import React from "react";
import styled, { css } from "styled-components";
import Utility from "../../utility";
import { dashboardMenuImages, pathConstants } from "../../constants";
//import { makeStyles } from "@material-ui/core/styles";
//import { Collapse } from "@material-ui/core";
// import Advertisers from "../advertisers";
// import ProductComponent from "../Products";
// // import ContentComponent from "../content";
// import ContentComponent from "../content";
// import AddAdvertisersComponent from "../addAdvertisers";
// // import ComponentAdd from "../addContent/addContentComponent";
// import ComponentAdd from "../addContent";
// import AddProduct from "../addProduct";
// import SettingComponent from "../Setting";
// import ReportsComponent from "../reports";
// import SideMenuComponent from "./desktopSideMenu"

const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 228px;
  padding-top: 15px;
  background-color: #5386aa;
  @media (max-width: 768px) {
    display: none;
  }
`; 

const MenuTitle = styled.span`
  margin: 0 0 0 16px;
  font-size: 18px;
  font-weight:300;
  font-family: MuseoSans !important;
  text-align: left;
`;

const VRSLogoImage = styled.img`
  margin-bottom: 18px;
  max-width:70px;
  width:100%;
`;

const MenuImage = styled.img`
  width: 20px;
  height: 20px;
`;

const MenuContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px 16px;
  margin: 8px 0;
  cursor: pointer;
  ${(props) =>
    props.isSelected
      ? css`
          font-weight: 500;
          background-color: #4f7e9f;
          color: #ffffff;

        `
      : css`
          font-weight: 300;
          color: #c8dfef;
        `}
`;


const DesktopSideMenu = (props) => {
    // console.log("adbjhdggb ",Utility.isMenuActive("/settings"));
    return (
      <SideMenuContainer>
        <VRSLogoImage src={"/images/vrs-logo.svg"} />
        <MenuContainer
          isSelected={Utility.isMenuActive("/hospitals")}
          onClick={() =>
            props.onMenuClick(pathConstants.DASHBOARD_MENU.HOSPITALS)
          }
        >
          <MenuImage
            alt="hospitals"
            src={
              dashboardMenuImages.HOSPITALS[Utility.isMenuActive("/hospitals")]
            }
          />
          <MenuTitle>Hospitals</MenuTitle>
        </MenuContainer>
        <MenuContainer
          isSelected={Utility.isMenuActive("/advertisers")}
          onClick={() =>
            props.onMenuClick(pathConstants.DASHBOARD_MENU.ADVERTISERS)
          }
        >
          <MenuImage
            alt="advertisers"
            src={
              dashboardMenuImages.ADVERTISERS[
                Utility.isMenuActive("/advertisers")
              ]
            }
          />
          <MenuTitle>Advertisers</MenuTitle>
        </MenuContainer>
        <MenuContainer
          isSelected={Utility.isMenuActive("/reports")}
          onClick={() => props.onMenuClick(pathConstants.DASHBOARD_MENU.REPORTS)}
        >
          <MenuImage
            alt="reports"
            src={dashboardMenuImages.REPORTS[Utility.isMenuActive("/reports")]}
          />
          <MenuTitle>Reports</MenuTitle>
        </MenuContainer>
        <MenuContainer
          isSelected={Utility.isMenuActive("/content")}
          onClick={() => props.onMenuClick(pathConstants.DASHBOARD_MENU.CONTENT)}
        >
          <MenuImage
            alt="content"
            src={dashboardMenuImages.CONTENT[Utility.isMenuActive("/content")]}
          />
          <MenuTitle>Content</MenuTitle>
        </MenuContainer>
        <MenuContainer
          isSelected={Utility.isMenuActive("/products")}
          onClick={() => props.onMenuClick(pathConstants.DASHBOARD_MENU.PRODUCTS)}
        >
          <MenuImage
            alt="products"
            src={dashboardMenuImages.PRODUCTS[Utility.isMenuActive("/products")]}
          />
          <MenuTitle>Products</MenuTitle>
        </MenuContainer>
        <MenuContainer
          isSelected={Utility.isMenuActive("/settings")}
          onClick={() => props.onMenuClick(pathConstants.DASHBOARD_MENU.SETTINGS)}
        >
          <MenuImage
            alt="settings"
            src={dashboardMenuImages.SETTINGS[Utility.isMenuActive("/settings")]}
          />
          <MenuTitle>Settings</MenuTitle>
        </MenuContainer>
      </SideMenuContainer>
    );
  };


  export default DesktopSideMenu;