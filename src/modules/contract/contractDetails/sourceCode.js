import React from "react";
import styled from "styled-components";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('javascript', js);

export default function SourceCode(props) {
  return (
    <MainContainer>
      <Container>
      <SyntaxHighlighter language="javascript" showLineNumbers={true} style={base16AteliersulphurpoolLight} wrapLongLines={true} customStyle = {{  backgroundColor: "#f0f2fc"}}>
            {
               props.data
               }
           
          </SyntaxHighlighter>
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ffffff;
  margin-top: 33px;
  padding: 20px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  height: 430px;
  overflow-y: scroll;
`;

const Div = styled.div`
  background-color: #f0f2fc;
  border-radius: 4px;
  width: 100%;
  height: 424px;
  /* display: flex; */
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #aaadc4;
  overflow-x: scroll;
  line-break: anywhere;
  white-space: pre-line;
  text-align: left;
  padding-left: 12px;
`;
