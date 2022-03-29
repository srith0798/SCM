import React, { useEffect } from "react";
import styled from "styled-components";
import ContractsService from "../../services/contractsService";
import { sessionManager } from "../../managers/sessionManager";
import ShowLoader from "../../common/components/showLoader";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cookiesConstants } from "../../constants";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function EventsDetails(props) {
  const [address, setAddress] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [showRaw, setShowRaw] = React.useState(false);

  let rawObject = [
    {
      data: props?.logs[0]?.data,
      topics: props?.logs[0]?.topics,
    },
  ];

  const getContractList = async (skip = 0, limit = 10) => {
    try {
      let userId = sessionManager.getDataFromCookies(cookiesConstants.USER_ID);
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
    //eslint-disable-next-line
  }, []);

  const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
  background-color: white;
  margin-top: 1.25rem;
  overflow-y: hidden !important;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    line-height: normal;
    ::-webkit-scrollbar {
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
      border-radius: 15px;
      /* background: #00A58C; */
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px grey;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3163f0;
      border-radius: 15px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-left: 10px;
  @media (min-width: 300px) and (max-width: 767px) {
    flex-direction: column;
  }
`;
const FilterDivision = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
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
const SubHeadBlue = styled.span`
  font-size: 0.85rem;
  color: #416be0;
  cursor: pointer;
  white-space: pre;
`;
const HeaderText = styled.div`
  font-size: 16px;
  color: #102c78;
  font-weight: 600;
  padding-bottom: 16px;
`;
const Line = styled.div`
  border-bottom: 0.031rem #eaf1ec solid;
  width: 100%;
  margin-top: 10px;
  margin-left: 16px;
`;
const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MidHeader = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding-top: 25px;
  padding-bottom: 16px;
  color: #191919;
`;
const ContentWrapper = styled.div`
  margin-left: 20px;
`;
const CodeWrapper = styled.div`
  height: fit-content;
  max-height: 400px;
  background-color: #f5f6fd;
  margin: 15px 15px 15px 0px;
  padding: 15px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 10px;
  }
`;
// const InCodeSelect = styled.select`
//   outline: none;
//   border: none;
//   border-radius: 3px;
//   padding: 0px 00px 0px 10px;
//   font-size: 15px;
//   height: 25px;
//   color: #416be0;
//   background: transparent;
// `;

const CodeMainContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ffffff;
  padding-top: 0px;
  @media (min-width: 300px) and (max-width: 414px) {
    max-width: 90vw;
    margin-top: 10px;
  }
`;
const CodeContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  max-width: 100vw;
  background-color: #ffffff;
  height: 100%;
  max-height: 430px;
  overflow-y: scroll;
`;

const CodeDiv = styled.div`
  width: 100%;
  @media (min-width: 300px) and (max-width: 414px) {
    width: 100%;
  }
`;

  return (
    <div>
      <ShowLoader state={loader} top={"33%"} />
      <MainContainer className="scroll">
        <FilterContainer>
          <FilterDivision>
            <HeaderText>Event Name</HeaderText>
            <FilterSelect>
              <option value="filter">
                {props?.func !== undefined ? "Transfer" : "Not available "}
              </option>
            </FilterSelect>
          </FilterDivision>
          <FilterDivision>
            <HeaderText>Contract</HeaderText>
            <FilterSelect>
              <option value="filter">{address[0]?.contractName}</option>
            </FilterSelect>
          </FilterDivision>
        </FilterContainer>
        <Line></Line>
        <MidContainer>
          <ContentWrapper>
            <MidHeader>
              {props?.func !== undefined ? "Transfer" : "Not available "}
            </MidHeader>
            <HeaderText>{address[0]?.contractName}</HeaderText>
            <CodeWrapper>
              &#123; <br />
              <SubHeadBlue>"From"</SubHeadBlue>: "{props?.from}"
              <br />
              <SubHeadBlue>"To"</SubHeadBlue>: "{props?.to}"
              <br />
              <SubHeadBlue>"Value"</SubHeadBlue>: "{props?.value}"
              <br /> &#125;
              <br />
              <SubHeadBlue onClick={() => setShowRaw(!showRaw)}>
                Show raw data and topics
                <img
                  style={{ marginLeft: "2px" }}
                  alt=""
                  src="/images/arrrow.svg"
                />
              </SubHeadBlue>
              {showRaw === true ? (
                <CodeDiv>
                  <CodeMainContainer>
                    <CodeContainer>
                      <SyntaxHighlighter
                        language="javascript"
                        showLineNumbers={true}
                        style={base16AteliersulphurpoolLight}
                        wrapLongLines={true}
                        customStyle={{ backgroundColor: "#f0f2fc", margin: 0 }}
                      >
                        {JSON.stringify(rawObject)}
                      </SyntaxHighlighter>
                    </CodeContainer>
                  </CodeMainContainer>
                </CodeDiv>
              ) : (
                ""
              )}
            </CodeWrapper>
          </ContentWrapper>
        </MidContainer>
      </MainContainer>
    </div>
  );
}


