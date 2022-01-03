import React from "react";
import styled from "styled-components";
export default function StateChange() {
  let listData = [
    {
      transactionHash: "0x9c7f23cd689cbb9c6334e1aabacb09be8fd1e727",
      value1: "72668138000000000000",
      value2: "7",
    },
    {
      transactionHash: "0x9c7f23cd689cbb9c6334e1aabacb09be8fd1e727",
      value1: "72668138000000000000",
      value2: "757843390846995",
    },
    {
      transactionHash: "0x9c7f23cd689cbb9c6334e1aabacb09be8fd1e727",
      value1: "72668138000000000000",
      value2: "757843390846995",
    },
  ];

  return (
    <>
      <ValidatorContainer>
        <HeaderName>
          <TitleHead>Apps Transaction Validator</TitleHead>
          <TransactionHash>
            xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
          </TransactionHash>
        </HeaderName>
        <TargetButtons>
          <Mapping>mapping (address = uint256)</Mapping>
          <Balances>Balances</Balances>
        </TargetButtons>

        {listData.map((item) => (
          <ValidatorList>
            <HashList>{item.transactionHash}</HashList>
            <RedButton>{item.value1}</RedButton>
            <img style={{ width: "10px" }} src="/images/arrow.svg" alt="" />
            <GreenButton>{item.value2}</GreenButton>
          </ValidatorList>
        ))}
      </ValidatorContainer>
    </>
  );
}

const ValidatorContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  margin-top: 1.25rem;
  height: 37.5rem;
  padding: 1.25rem;
`;
const TargetButtons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.625rem;
  max-width: 17.313rem;
  align-items: center;
  justify-content: space-between;
`;
const TransactionHash = styled.div`
  font-size: 14px;
  // font-weight: 600;
  color: #191919;
`;
const TitleHead = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #102c78;
`;
const HashList = styled.div`
  font-size: 0.875rem;
  // font-weight: 600;
  color: #191919;
  margin-right: 0.813rem;
`;
const HeaderName = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 4rem;
  margin-bottom: 1.25rem;
`;
const Mapping = styled.div`
  background: #3163f11a 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 0.25rem;
  padding: 0.313rem;
  width: 100%;
  max-width: 31.25rem;
  white-space: nowrap;
  font-size: 0.813rem;
  font-weight: 600;
  margin-right: 0.625rem;
`;
const GreenButton = styled.div`
  background: #effff1 0% 0% no-repeat padding-box;
  border: 1px solid #1ace2f;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1ace2f;
  padding: 0.313rem;
  width: 100%;
  max-width: 31.25rem;
  white-space: nowrap;
  height: 1.563rem;
  margin: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;
const RedButton = styled.div`
  background: #fde7e7 0% 0% no-repeat padding-box;
  border: 1px solid #ce1a1a;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ce1a1a;
  padding: 0.313rem;
  width: 100%;
  max-width: 31.25rem;
  white-space: nowrap;
  height: 1.563rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}
`;
const Balances = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
`;
const ValidatorList = styled.div`  
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 25.688rem;
    margin-top: 0.625rem;
    align-items: center;
}`;
