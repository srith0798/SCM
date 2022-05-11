import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import { Toaster } from "react-hot-toast";


const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    marginBottom: "275px",
    ['@media screen and (min-width: 300px) and (max-width: 580px)']:{
      height: "250px",
      marginBottom: "51px",
      width:"88% !important",
      overflow :"hidden",
      bottom: "22.5%"
  },
  ['@media screen and (min-width: 767px) and (max-width: 1024px)']:{
    height: "215px",
    bottom: "17%"
},
  },
}));

export default function WalletPopUp(props) {
  const classes = useStyles();
  
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div>
        {props.state ? (
          <Dialog classes={{ paper: classes.dialogBox }} open={true}>
            <MainContainer>
              <Container>
              <HeadingDiv>
                  XDC Pay not detected
              </HeadingDiv>
              <ContentDiv>
              Use the desktop version of XDC Smart Contract Manager to manage contracts
              </ContentDiv>
              <ButtonDivMobile>
                  <ButtonMobile onClick={()=> props.click()}>
                  I understood
                  </ButtonMobile>
              </ButtonDivMobile>
              </Container>
            </MainContainer>
          </Dialog>
        ) : null}
      </div>
    </>
  );
}

const HeadingDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
font-size: 16px;
font-weight: 500;
font-family: 'Inter', Medium;
color: #303134;
@media (min-width: 767px) and (max-width: 1024px){
    font-weight: 600;
    font-size: 24px;
}
`;

const ContentDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
font-size: 14px;
font-weight: 500;
font-family: 'Inter', Medium;
color: #303134;
@media (min-width: 767px) and (max-width: 1024px){
padding-top: 10px;
font-size: 17px;
}
`;


const Button = styled.button`
  background-repeat: no-repeat;
  display: -webkit-inline-box;
  background-position: 0.5rem;
  padding: 14px;
  item-align: center;
  background-size: 0.875rem;
  width: 264px;
  height: 50px;
  padding-top: 9px;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  font-size: 16px;
  font-weight: 600;
  margin-top: 27px;
  @media (min-width: 300px) and (max-width: 580px) {
    margin-top: 9px;
    display:none;
  }
  
`;
const ButtonMobile = styled.button`
background-repeat: no-repeat;
display: -webkit-inline-box;
background-position: 0.5rem;
padding: 14px;
item-align: center;
background-size: 0.875rem;
width: 264px;
height: 30px;
padding-top: 6px;
background-color: #3163f0;
color: #ffffff;
border: none;
border-radius: 0.25rem;
font-size: 12px;
font-weight: 600;
margin-top: 27px;
@media (min-width: 300px) and (max-width: 580px) {
  margin-top: 9px;
  padding-left: 95px;
}
@media (min-width: 1024px){
  display:none;
}
@media (min-width: 767px) and (max-width: 1024px){
margin-top: 10px;
padding-left: 89px;
font-size: 15px;
}
`;
const ButtonDivMobile = styled.div`
padding:2px;
@media (min-width: 1024px){
  display:none;
}
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  padding: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100%;
  max-width: 563px;
  align-items: center;
  text-align: center;
  height: 200px;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-left: 17px;
    padding-right: 17px;
  }
`;