import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import contractsService from "../../services/contractsService";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function AddNetwork(props) {
  const classes = useStyles();
  const addNetwork = async () => {
    let requestData = {
      networkName: networkName,
      newRpcUrl: newRpcUrl,
      chainId: chainId,
      currencySymbol: currencySymbol,
      blockExplorer: blockExplorer,
    };

    try {
      const response = await contractsService.addNetworks(requestData);
      console.log(response);
    } catch (e) {
      console.log("Error", e);
    }
  };
  const [networkName, setNetworkName] = React.useState("");
  const [newRpcUrl, setNewRpcUrl] = React.useState("");
  const [chainId, setChainId] = React.useState("");
  const [currencySymbol, setCurrencySymbol] = React.useState("");
  const [blockExplorer, setBlockExplorer] = React.useState("");

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Network</Add>
              <img alt="" src="/images/close.svg" onClick={props.click} />
            </SubContainer>

            <Heading>Network name</Heading>
            <Input type="text" placeholder="Name" onChange={(e) => setNetworkName(e.target.value)} value={networkName} />
            <Heading>New RPC URL</Heading>
            <Input type="text" placeholder="URL" onChange={(e) => setNewRpcUrl(e.target.value)} value={newRpcUrl} />

            <Heading>Chain ID</Heading>
            <Input type="text" placeholder="ID" onChange={(e) => setChainId(e.target.value)} value={chainId} />
            <Heading>Currency symbol (optional)</Heading>
            <Input type="text" placeholder="Symbol" onChange={(e) => setCurrencySymbol(e.target.value)} value={currencySymbol} />
            <Heading>Block explorer (optional)</Heading>
            <Input type="text" placeholder="Explorer" onChange={(e) => setBlockExplorer(e.target.value)} value={blockExplorer} />
            <Button onClick={() => addNetwork()}>Add network</Button>
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
  background: #9db5f8 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  padding: 10px 12px;
  margin-right: 10px;
  margin-top: 1.25rem;
  height: 41px;
`;
