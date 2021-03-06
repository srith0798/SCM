import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";
//SyntaxHighlighter.registerLanguage("json", json);

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    bottom: "20px",
    height: "611px",
    maxWidth: "700px",
  },
}));

export default function ContractAbi(props) {
  const classes = useStyles();
  const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Container = styled.div`
  white-space: nowrap;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  height: 600px;
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  color: #303134;
`;
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Contract ABI</Add>
              <img
                alt=""
                src="/images/close.svg"
                onClick={props.click}
                style={{ cursor: "pointer" }}
              />
            </SubContainer>
            <SyntaxHighlighter
              language="json"
              style={base16AteliersulphurpoolLight}
              wrapLongLines={true}
              customStyle={{ backgroundColor: "#f0f2fc", height: "530px" }}
            >
              {props.data}
            </SyntaxHighlighter>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}