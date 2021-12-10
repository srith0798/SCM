import React from "react";
import styled, { css } from "styled-components";
import Utility from "../../utility";
import {useState} from 'react';
import { dashboardMenuImages, pathConstants } from "../../constants";

const Hamburger  = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px 12px 0px 5px;
  position: absolute;
  left: 1%;
  top: 1%;
  cursor:pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;
const LogoBlue  = styled.img`
  width: 80px;
  height: 45px;
  margin: 0px 12px 0px 35px;
  position: absolute;
  left: 1%;
  top: 1%;
  cursor:pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

const SideMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 228px;
  padding-top: 15px;
  background-color: #5386aa;
  @media (max-width: 768px) {
    display: flex;
    margin-top: 60px;
  }
`;
const MenuTitle = styled.span`
  margin: 0 0 0 16px;
  font-size: 15px;
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
    const [open, setOpen] = useState(false);
    return (
      <>
      {open === false ? 
      <Hamburger src="/images/hamburger.svg" onClick={() => setOpen(!open)} /> :
      <Hamburger src="/images/hamburger_open.svg" onClick={() => setOpen(!open)} /> }
      <LogoBlue src="/images/Logo_blue.svg"/> 
      {open && 
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
          }
          </>
    );
  };


  export default DesktopSideMenu;