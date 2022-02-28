import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import ContractsService from "../../services/contractsService";
import { sessionManager } from "../../managers/sessionManager";
import { Row } from "simple-flexbox";
import ShowLoader from "../../common/components/showLoader";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('javascript', js);

export default function SubContracts(props) {
  const [address, setAddress] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [showContract, setShowVerifiedContract] = React.useState(false);
  const [selectedContract, setSelectedContract] = React.useState(1);

  const getContractList = async (skip = 0, limit = 10) => {
    try {
      let userId = sessionManager.getDataFromCookies("userId");
      const requestData = {
        skip: skip,
        limit: limit,
        userId: userId,
      };
      setLoader(true);
      const response = await ContractsService.getContractsList(requestData);
      setLoader(false);
      let check = response.contractList.filter((row) => {
        return row.address === props.address;
      });
      setAddress(check);
    } catch (e) {
      setLoader(false);
    }
  };
  useEffect(() => {
    getContractList();
  }, []);
  
  return (
    <div>
      {showContract === true ? (
        <BoxContainer>
          <div style={{display: "flex", justifyContent: "space-between"}}>
           <div>
          <DetailContainer>
            <Row>
              <Heading>Contracts </Heading>
              <SubHead>{address[0].contractName}</SubHead>
            </Row>
          </DetailContainer>
          <CommonDiv>
            <RowData check = {selectedContract}>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                <TextLi>Subcontracts name</TextLi>
              </Heads>
            </RowData>
          </CommonDiv>
          </div>
          <div style={{marginRight: "5%"}}>
          <SyntaxHighlighter language="javascript" showLineNumbers={true} style={base16AteliersulphurpoolLight} wrapLongLines={true} customStyle = {{  backgroundColor: "#f0f2fc"}}>
           
          {address[0].sourceCode}
           
          </SyntaxHighlighter>
          </div>
          </div>
          
        </BoxContainer>
        
        
      ) : (
        <MainContainer>
          <MainBoxContainer>
            <Container>
              <ShowLoader state={loader} top={"33%"} />
              <Title>{address[0]?.contractName}</Title>
              <SubTitle>{address[0]?.address}</SubTitle>
              <SubTitleTwo>
                <Button onClick={() => setShowVerifiedContract(true)}>
                  <img
                    style={{ marginRight: "4px" }}
                    alt=""
                    src="/images/verified_tick.svg"
                  />
                  {address[0]?.status}
                </Button>
              </SubTitleTwo>
            </Container>
          </MainBoxContainer>
        </MainContainer>
      )}
    </div>
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

const BoxContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const RowData = styled.div`
  display: flex;
  padding-left: 16px;
  width: 250px;
  height: 50px;
  background-color: ${(props) => (props.check === 1 ? "#3163f0" : "")};
  color: ${(props) => (props.check === 1 ? "#ffffff" : "")};
  /* &:hover {
    background-color: #3163f0;
    color: #ffffff;
  } */
`;
const SubHead = styled.div`
  font-size: 20px;
  font-weight: 600px;
  letter-spacing: 0px;
  color: #102c78;
  font-size: 15px;
`;
const DetailContainer = styled.div`
  padding: 15px;
`;

const CommonDiv = styled.div`
  width: 100%;
`;

const Heads = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  align-items: center;
  font: normal normal 600 14px/17px Inter;
  height: 3.125rem;
  /* &:hover {
    background-color: #3163f0;
    color: #ffffff; */
  }
`;

const Icon = styled.img`
  width: 1rem;
  cursor: pointer;
  margin-right: 2px;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #3163f0;
  opacity: 1;
  width: 100%;
  max-width: 110px;
`;

const TextLi = styled.div`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  font-size: 0.875rem;
`;
