import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function SubContracts() {
  const SubButton = () => {
    history.push("/subcontract2");
  };
  return (
    <MainDiv>
      <MainBoxContainer>
        <Container>
          <Title>App Transactions Validator</Title>
          <SubTitle>xdc02aaa39…8b3c</SubTitle>
          <SubTitleTwo>
            <Button onClick={SubButton}>Verified contracts</Button>
          </SubTitleTwo>
        </Container>
        <Container>
          <Title>App Transactions Validator</Title>
          <SubTitle>xdc02aaa39…8b3c</SubTitle>
          <SubTitleTwo>
            <Button onClick={SubButton}>Verified contracts</Button>
          </SubTitleTwo>
        </Container>
        <Container>
          <Title>App Transactions Validator</Title>
          <SubTitle>xdc02aaa39…8b3c</SubTitle>
          <SubTitleTwo>
            <Button onClick={SubButton}>Verified contracts</Button>
          </SubTitleTwo>
        </Container>
      </MainBoxContainer>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 365px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 23px;
`;
const Container = styled.div`
  padding: 10px;
  width: 250px,
  height: 200px,       
  background: #F5F6FD;
  border: solid #D5E0FF;
  outline: none;
  background: #F5F6FD 0% 0% no-repeat padding-box;
  border: 1px solid #D5E0FF;
  border-radius: 6px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
          
`;

const MainBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 650px;
  width: 100%;
  height: 104px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1d3c93;
  margin-bottom: 5px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  color: #191919;
  margin-bottom: 5px;
`;
const SubTitleTwo = styled.div``;

const Button = styled.button`
  background: #00a58c 0% 0% no-repeat padding-box;
  border-radius: 3px;
  border: none;
  padding: 3px;
  width: 151px;
  // height: 30px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
`;
