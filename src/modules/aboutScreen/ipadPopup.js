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
const Title = styled.div`
  text-align: center;
  font: normal normal 600 16px/20px Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding-top: 20px;
`;
const TitleMobile = styled.div`
text-align: left;
  font: normal normal 600 16px/20px Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding-top: 0px;`;

const StepsTitle = styled.div`
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  padding-bottom: 10px;
`;
const StepsTitleMobile = styled.div`
  text-align: left;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  padding-bottom: 10px;
  margin-top: 0px;
  margin-left: 15px;
`;
const SubTitle = styled.div`
  text-align: center;
  letter-spacing: 0px;
  opacity: 1;
  padding-top: 10px;
  font-size: 16px;
  font-weight: normal;
`;
const SubTitleMobile =styled.div`
text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  padding-top: 10px;
  font-size: 14px;
  font-weight: normal;
  @media (min-width: 300px) and (max-width: 767px){
    padding-top: 5px;
  }
`;

const IconContainer = styled.div`
  padding: 6px;
  border: 0.031rem #eaf1ec solid;
  width: 200px;
  height: 233px;
  margin: 3px;
`;
const IconContainerMobile = styled.div`
  padding: 6px;
  border: 0.031rem #eaf1ec solid;
  width: 96%;
  height: 107px;
  margin: 3px;
  margin-bottom: 12px;
  border-radius: 6px;
  margin-left: 9px;
`;
const CrossIcon = styled.img`
  cursor: pointer;
  width: 16px;
  transition: width 0.1s;
  &:hover {
    width: 18px;
    box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
  }
`;
const DetailBox = styled.div`
  display: flex;
  margin-top: 26px;
  // padding-bottom: 18px;
  @media (min-width: 250px) and (max-width:580px) {
    flex-direction: column;
    display:none;
  }
`;
const DetailBoxMobile = styled.div`
  display: flex;
  margin-top: 26px;
  // padding-bottom: 18px;
  @media (min-width: 250px) and (max-width:580px) {
    flex-direction: column;
  }
  @media (min-width: 580px) {
    display:none;
  }
`;
const DivMobile = styled.div`
@media (min-width: 250px) and (max-width:768px) {
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-left: 12px;
}
`;
const SubDivMob = styled.div``;

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
const Add = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #303134;
  padding-top: 15px;
  padding-bottom: 5px;

  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px){
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const Line = styled.div`
  border-bottom: 0.031rem #eaf1ec solid;
  margin-top: 10px;
  width: 596px;
  margin-left: -20px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
