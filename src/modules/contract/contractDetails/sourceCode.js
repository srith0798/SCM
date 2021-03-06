import React from "react";
import styled from "styled-components";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function SourceCode(props) {
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

  const TextFlow = styled.textarea`
    width: 100%;
    height: 100%;
    background-color: "#ECF0F7" !important;
  `;

  const CodeDiv = styled.div`
    width: 100%;
    height: 100%;
  `;

  return (
    <MainContainer>
      <Container>
        {props.status === "Verified" ? (
          <SyntaxHighlighter
            language="javascript"
            showLineNumbers={true}
            style={base16AteliersulphurpoolLight}
            wrapLongLines={true}
            customStyle={{ backgroundColor: "#f0f2fc" }}
          >
            {props.data}
          </SyntaxHighlighter>
        ) : (
          <CodeDiv>
            {
              <TextFlow
                style={{ backgroundColor: "#ECF0F7" }}
                value={props.data}
                readOnly
              />
            }
          </CodeDiv>
        )}
      </Container>
    </MainContainer>
  );
}
