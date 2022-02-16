import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import contractsService from "../../services/contractsService";
import utility from "../../utility";
const validUrl = require("valid-url");
const Web3 = require("web3");
const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));
export default function AddNetwork(props) {
  const classes = useStyles();
  const [loader, setLoader] = React.useState(false);
  const [isPresent, setisPresent] = React.useState(false);

  const addNetwork = async () => {
    let requestData = {
      networkName: networkName,
      newRpcUrl: newRpcUrl,
      chainId: chainId,
      currencySymbol: currencySymbol,
      blockExplorer: blockExplorer,
    };
    setLoader(true);
    try {
      const response = await contractsService.addNetworks(requestData);
      setLoader(false);
      console.log(response);
    } catch (e) {
      console.log("Error", e);
    }
  };
  const getNetworksLists = async (skip = 0, limit) => {
    try {
      const requestData = {
        skip: skip,
        limit: limit,
      };

      setLoader(true);
      const response = await contractsService.getNetworksLists(requestData);
      console.log("response", response.networkList);
      response.map(
        (contract) => console.log("contract", contract)
        // contract.newRpcUrl === newRpcUrl ? setisPresent(true) : ""
      );
    } catch (e) {
      console.log("Error in networklist", e);
    }
  };
  const [networkName, setNetworkName] = React.useState("");
  const [newRpcUrl, setNewRpcUrl] = React.useState("");
  const [chainId, setChainId] = React.useState(0);
  const [currencySymbol, setCurrencySymbol] = React.useState("");
  const [blockExplorer, setBlockExplorer] = React.useState("");
  const load = () => {
    props.click(false);
    props.getNetworkList();
  };
  const addNetworksDetails = async () => {
    console.log("networkUrlValidation", networkUrlValidation());

    await getNetworksLists();
    console.log("present", isPresent);
    setTimeout(() => {
      if (isPresent) {
        if (networkUrlValidation() !== undefined && !networkUrlValidation()) {
          utility.apiFailureToast("Invalid RPC endpoint");
          return;
        }
      } else {
        addNetwork();
        setisPresent(false);
      }
    }, 2000);
  };

  async function networkUrlValidation() {
    if (validUrl.isWebUri(newRpcUrl)) {
      const web3 = new Web3(new Web3.providers.HttpProvider(newRpcUrl));
      const networkChainId = await web3.eth.getChainId();
      console.log("chain", networkChainId);
      web3.eth.getBlockNumber((err, res) => {
        if (err) {
          utility.apiFailureToast("Invalid RPC endpoint");
          console("one");
          return false;
        }
        if (networkChainId != chainId) {
          console.log("ChainId", chainId);
          console.log("networkChainId", networkChainId);
          utility.apiFailureToast("Invalid chainId");
        } else {
          setNewRpcUrl(newRpcUrl);
          console.log("two");
          utility.apiSuccessToast("Network Added successfully");
          return true;
        }
      });
    }
     else {
      if (!newRpcUrl.startsWith("http")) {
        utility.apiFailureToast(
          "URIs require the appropriate HTTP/HTTPS prefix."
        );
        console.log("threee");
        return false;
      } else {
        utility.apiFailureToast("Invalid RPC URI");
        console.log("four");
        return false;
      }
    }
  }

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Network</Add>
              <img alt="" src="/images/close.svg" onClick={() => load()} />
            </SubContainer>
            <Heading>Network name</Heading>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e) => setNetworkName(e.target.value)}
              value={networkName}
            />
            <Heading>New RPC URL</Heading>
            <Input
              type="text"
              placeholder="URL"
              onChange={(e) => setNewRpcUrl(e.target.value)}
              value={newRpcUrl}
            />

            <Heading>Chain ID</Heading>
            <Input
              type="number"
              // placeholder="ID"
              onChange={(e) => setChainId(e.target.value)}
              value={chainId}
            />
            <Heading>Currency symbol (optional)</Heading>
            <Input
              type="text"
              placeholder="Symbol"
              onChange={(e) => setCurrencySymbol(e.target.value)}
              value={currencySymbol}
            />
            <Heading>Block explorer (optional)</Heading>
            <Input
              type="text"
              placeholder="Explorer"
              onChange={(e) => setBlockExplorer(e.target.value)}
              value={blockExplorer}
            />
            <Button
              onClick={() => {
                addNetworksDetails();
                load();
              }}
            >
              Add network
            </Button>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
const Heading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 1.25rem;
  margin-bottom: 0.7rem;
`;
const Input = styled.input`
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 0.25rem;
  border: none;
  color: #767c93;
  padding: 0.313;
  width: 100%;
  padding: 8px 0px 8px 11px;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 43.75rem;
  height: auto;
  padding: 2rem;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #303134;
`;

const Button = styled.button`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  background: #3163f0 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  padding: 6px 12px;
  margin-right: 10px;
  margin-top: 1.25rem;
  height: 35px;
`;
