import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function SubContracts(props) {
  const SubButton = () => {
    history.push("/verified-contracts");
  };
  return (
    <MainContainer>
      <MainBoxContainer>
        <Container>
          <Title>App_Transactions_Validator</Title>
          <SubTitle>{props.address}</SubTitle>
          <SubTitleTwo>
            <Button onClick={SubButton}>
              <img
                style={{ marginRight: "4px" }}
                alt=""
                src="/images/verified_tick.svg"
              />
              Verified Contracts
            </Button>
          </SubTitleTwo>
        </Container>
      </MainBoxContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 22.813rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  padding: 1.438rem;
  margin-top: 1.25rem;
  @media (min-width: 300px) and (max-width: 414px) {
    height: 42rem;
  }
`;
const Container = styled.div`
  padding: 10px;
  padding-bottom: 65px;
  padding-top: 56px;
  border: solid #d5e0ff;
  outline: none;
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 300px) and (max-width: 414px) {
    padding-bottom: 21px;
    padding-top: 10px;
    width: 224px;
  }
`;

const MainBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 40.625rem;
  width: 100%;
  height: 6.5rem;
  @media (max-width: 768px) {
    max-width: 40.625rem;
  }
  @media (min-width: 300px) and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 357px;
  }
`;
const Title = styled.div`
  font-size: 0.875rem;
  color: #1d3c93;
  margin-bottom: 0.413rem;
`;
const SubTitle = styled.div`
  font-size: 0.875rem;
  color: #191919;
  margin-bottom: 0.513rem;
`;
const SubTitleTwo = styled.div`
  height: 22px;
`;

const Button = styled.button`
  background: #00a58c 0% 0% no-repeat padding-box;
  border-radius: 0.188rem;
  border: none;
  padding: 0.288rem;
  width: 10.438rem
  height: 2px;
  text-align: center;
  font-size: 0.75rem;
  color: #ffffff;
`;
