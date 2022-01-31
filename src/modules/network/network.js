import React, { useState } from "react";
import styled from "styled-components";
import AddNetwork from "./addNetwork";
import Tooltip from "@mui/material/Tooltip";
import contractsService from "../../services/contractsService";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";
import ShowLoader from "../../common/components/showLoader";

export default function Network() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (val) => {
    setOpen(val);
  };
  React.useEffect(() => {
    getNetworkList();
  }, []);

  const [address, setAddress] = React.useState([]);
  const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [networkToolTip, setnetworkToolTip] = React.useState(false);
  const [urlToolTip, seturlToolTip] = React.useState(false);

  const getNetworkList = async (skip = 0, limit = 10) => {
    try {
      const requestData = {
        skip: skip,
        limit: limit,
      };

      setLoader(true);
      const response = await contractsService.getNetworksLists(requestData);
      setLoader(false);
      setAddress(response.networkList);
      if (response.networkList.length === 0) setShowPlaceHolder(true);
      else setShowPlaceHolder(false);
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };
  return (
    <MainContainer>
      <ShowLoader state={loader} top={"33%"} />
      <SubContainer>
        <div>
          <Heading>Networks</Heading>
        </div>
        <div style={{ display: "flex" }}>
          {open && <AddNetwork click={handleClose} />}

          <Button onClick={handleClickOpen}>Add Network</Button>
        </div>
      </SubContainer>
      <Div>
        <Container>
          <ColumnOne>
            Network
            <Tooltip
              open={networkToolTip}
              onOpen={() => setnetworkToolTip(true)}
              onClose={() => setnetworkToolTip(false)}
              disableFocusListener
              title="The blockchain network in use"
            >
              <ToolTipIcon onClick={() => setnetworkToolTip(!networkToolTip)} src="/images/tool-tip.svg" />
            </Tooltip>
          </ColumnOne>
          <UrlHeading>
            URL
            <Tooltip
              open={urlToolTip}
              onOpen={() => seturlToolTip(true)}
              onClose={() => seturlToolTip(false)}
              disableFocusListener
              title="URL of the network"
            >
              <ToolTipIcon onClick={() => seturlToolTip(!urlToolTip)} src="/images/tool-tip.svg" />
            </Tooltip>
          </UrlHeading>
        </Container>
        <div>
          {address.map((data, index) => {
            console.log("dadada", data.networkName);
            return (
              <Container>
                {/* <Icon src="/images/mainnet.svg" /> */}
                <Head>{data.networkName}</Head>
                <Url>{data.newRpcUrl}</Url>
              </Container>
            );
          })}
        </div>
        {/* {showPlaceHolder && (
          <PlaceHolderContainer>
            <PlaceHolderImage src="/images/contracts.svg" />
            No Contracts Found
          </PlaceHolderContainer>
        )} */}
      </Div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #ecf0f7;
  width: 100%;
  padding: 2.125rem;
  height: 100vh;
  @media (max-width: 375px) {
    padding: 3.2rem 1rem 1rem 1rem;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
`;
const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const UrlHeading = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 15.625rem;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    max-width: 7.625rem;
    width: 100%;
    margin-left: 18px;
  }
`;
const Button = styled.button`
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 0.3rem;
  padding-left: 1.313rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  width: 8.125rem;
  height: 2.188rem;
  font-size: 0.875rem;
  @media (min-width: 300px) and (max-width: 768px) {
    width: 7.125rem;
    height: 2rem;
    font-size: 0.8em;
    whitespace: rowrap;
  }
`;
const Div = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 25rem;
  margin-top: 0.6rem;
  padding: 0.625rem;

  @media (min-width: 300px) and (max-width: 767px) {
    height: 300px;
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
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
const Container = styled.div`
  padding: 0.738rem;
  border-bottom: 0.063rem solid #e3e7eb;
  white-space: nowrap;
  display: flex;
`;
const ColumnOne = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 15.625rem;
  white-space: nowrap;
`;

const Icon = styled.img`
  width: 1.75rem;
  margin-right: 0.625rem;
`;
const Url = styled.div`
  font-size: 0.875rem;
  color: #416be0;
  width: 100%;
  max-width: 15.625rem;
  margin-left: -5px;
  @media (min-width: 300px) and (max-width: 767px) {
    max-width: 7.625rem;
    width: 100%;
  }
`;
const Head = styled.div`
  color: #191919;
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  max-width: 13.438rem;
  white-space: nowrap;
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const PlaceHolderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 16rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 50%;
  font-weight: 600;
  font-size: 13px;
`;
const PlaceHolderImage = styled.img`
  width: 50px;
  -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
  filter: grayscale(60%);
  margin-bottom: 20px;
`;
