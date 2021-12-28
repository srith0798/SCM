import React from "react";
import styled from "styled-components";

export default function Events() {
  return (
    <>
      <MainContainer>
        <FilterContainer>
          <FilterDivision>
            <HeaderText>Event Name</HeaderText>
            <FilterSelect>
              <option value="filter">Filter by event name</option>
            </FilterSelect>
          </FilterDivision>
          <FilterDivision>
            <HeaderText>Contract</HeaderText>
            <FilterSelect>
              <option value="filter">Filter by contract</option>
            </FilterSelect>
          </FilterDivision>
        </FilterContainer>
        <MidContainer>
          <ContentWrapper>
            <MidHeader>Transfer</MidHeader>
            <HeaderText>App_Transactions_Validator</HeaderText>
            <CodeWrapper>
              &#123; <br />
              "From": xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
              <br />
              "to"
              <br />
              "Value"
              <br /> &#125;
              <br />
              <InCodeSelect>
                <option value="filter">Select raw data and topics</option>
              </InCodeSelect>
            </CodeWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <MidHeader>Approval</MidHeader>
            <HeaderText>App_Transactions_Validator</HeaderText>
            <CodeWrapper>
              &#123; <br />
              "From": xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
              <br />
              "to"
              <br />
              "Value"
              <br /> &#125;
              <br />
              <InCodeSelect>
                <option value="filter">Select raw data and topics</option>
              </InCodeSelect>
            </CodeWrapper>
          </ContentWrapper>
        </MidContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
  background-color: white;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-left: 10px;
`;
const FilterDivision = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const FilterSelect = styled.select`
  outline: none;
  border: none;
  background-color: #f5f6fd;
  border-radius: 3px;
  width: 260px;
  padding: 0px 10px 0px 10px;
  font-size: 12px;
  height: 25px;
  color: #a6aabf;
`;
const HeaderText = styled.div`
  font-size: 16px;
  color: #102c78;
  font-weight: 600;

  padding-bottom: 16px;
`;
const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MidHeader = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding-top: 18px;
  padding-bottom: 16px;
`;
const ContentWrapper = styled.div`
  margin-left: 20px;
`;
const CodeWrapper = styled.div`
  height: 170px;
  background-color: #f5f6fd;
  margin: 15px 15px 15px 0px;
  padding: 15px;
`;
const InCodeSelect = styled.select`
  outline: none;
  border: none;
  border-radius: 3px;
  width: 220px;
  padding: 0px 10px 0px 10px;
  font-size: 15px;
  height: 25px;
  color: #416be0;
  background: transparent;
`;
