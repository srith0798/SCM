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
                <option value="filter">Select raw data and topicst</option>
              </InCodeSelect>
            </CodeWrapper>
          </ContentWrapper>
        </MidContainer>
      </MainContainer>
    </>

    // <MidContainer>
    //   <ThirdBoxContainer>
    //     <Row
    //       style={{
    //         display: "flex",
    //         width: "100%",

    //         justifyContent: "space-between",
    //       }}
    //     >
    //       <CAllADDs style={{ padding: "10px" }}>
    //         Event_Name:
    //         <br />
    //         <Select
    //           style={{
    //             width: "200px",
    //             marginTop: "2px",
    //             background: "#F5F6FD",

    //             height: "3rem",
    //           }}
    //         />
    //       </CAllADDs>
    //       <CAllADDs style={{ padding: "10px" }}>
    //         Contract:
    //         <br />
    //         <Select
    //           style={{
    //             width: "200px",
    //             marginTop: "2px",
    //             background: "#F5F6FD",

    //             height: "3rem",
    //           }}
    //         />
    //       </CAllADDs>
    //     </Row>
    //   </ThirdBoxContainer>
    //   <Heading style={{ paddingLeft: "20px" }}>
    //     App_Transactions_Validator
    //   </Heading>
    //   <BoxContainer
    //     defaultValue={10}
    //     style={{
    //       width: "100%",
    //       height: "130px",
    //       background: "#F5F6FD",
    //       paddingLeft: "20px",
    //     }}
    //   >
    //     <Heading>
    //       [ <br />
    //       "From": xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
    //       <br />
    //       "to"
    //       <br />
    //       "Value"
    //       <br />]
    //     </Heading>
    //   </BoxContainer>
    //   <Heading style={{ padding: "20px" }}>Approval</Heading>
    //   <br />
    //   <Heading style={{ paddingLeft: "20px" }}>
    //     App_Transactions_Validator
    //   </Heading>
    //   <BoxContainer
    //     defaultValue={10}
    //     style={{
    //       width: "100%",
    //       height: "150px",
    //       borderspacing: "10px",
    //       background: "#F5F6FD",
    //       paddingLeft: "20px",
    //     }}
    //   >
    //     <Heading>
    //       ["Owner": xhadhfbskn74833n3ioj5n35ngnncsdjkcsvkdsc
    //       <br />
    //       "Spender" :x24rfn35i6n3n434rnffcjckibw42uh4c
    //       <br />
    //       "Amount" :k23rcwe5fqef5f4ed345sdwff34g55g3afc
    //       <br />]
    //     </Heading>
    //   </BoxContainer>
    // </MidContainer>
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
  font-size: 18px;
  color: #102c78;
  font-weight: 600;
`;
const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MidHeader = styled.div`
  font-size: 14px;
  font-weight: 600;
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
