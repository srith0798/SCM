import React from "react";
import styled from "styled-components";
export default function SourceCode(props) {
  console.log("asdas", props);
  return (
    <MainContainer>
      <Container>
        <Div>{props.data}</Div>
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
`;

const Div = styled.div`
  background-color: #f0f2fc;
  border-radius: 4px;
  width: 100%;
  height: 424px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #aaadc4;
  overflow-x: scroll;
`;
