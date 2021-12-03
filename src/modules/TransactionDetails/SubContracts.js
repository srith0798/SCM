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
  height: 22.813rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  padding: 1.438rem;
`;
const Container = styled.div`
  padding: 0.625rem;
  width: 15.625rem,
  height: 12.5rem,       
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
  max-width: 40.625rem;
  width: 100%;
  height: 6.5rem;
`;
const Title = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1d3c93;
  margin-bottom: 0.313rem;
`;
const SubTitle = styled.div`
  font-size: 0.875rem;
  color: #191919;
  margin-bottom: 0.313rem;
`;
const SubTitleTwo = styled.div``;

const Button = styled.button`
  background: #00a58c 0% 0% no-repeat padding-box;
  border-radius: 0.188rem;
  border: none;
  padding: 0.188rem;
  width: 9.438rem
  text-align: center;
  font-size: 0.75rem;
  color: #ffffff;
`;
