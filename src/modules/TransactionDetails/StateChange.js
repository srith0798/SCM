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
            <img
              style={{ width: "10px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            />
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
