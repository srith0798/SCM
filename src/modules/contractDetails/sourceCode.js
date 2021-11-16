import React from "react";
import styled from "styled-components";
export default function SourceCode() {
  return (
    <MainContainer>
      <Container>
        <Div>Code</Div>
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
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  //   border: 1px solid #707070;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  max-width: 700px;
  height: 300px;
  padding: 20px;
`;

const Div = styled.div`
  background-color: #f0f2fc;
  border-radius: 4px;
  width: 100%;
  max-width: 650px;
  height: 220px;
  margin-top: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #aaadc4;
  font-size: 45px;
`;
