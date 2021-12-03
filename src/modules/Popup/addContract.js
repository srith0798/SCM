import React from "react";
import styled from "styled-components";

import Dialog from "@mui/material/Dialog";

export default function AddContract(props) {
  return (
    <div>
      <Dialog open>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Contract</Add>
              <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
            </SubContainer>
            <ImportFile>Import Public Contracts</ImportFile>
            <Content>
              You can import contracts that have been verified publicly on XDC.
            </Content>
            <Input
              type="text"
              placeholder="Find a public contract by name or address"
            />
            <Button>Import Contracts</Button>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;

  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  max-width: 700px;
  height: 300px;
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  color: #303134;
`;
// const Img = styled.img`
//   cursor: pointer;
// `;
const ImportFile = styled.div`
  //   font: normal normal 600 16px/20px Inter;
  color: #102c78;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
`;
const Content = styled.div`
  font: normal normal medium 16px/20px Inter;
  color: #303134;
  margin-top: 20px;
`;
const Input = styled.input`
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 34px;
  background-size: 14px;
  position: relative;
  background-color: #ffffff;
  color: #888888;
  border: none;
  border-radius: 4px;
  width: 100%;
  background-color: #f0f2fc;
  height: 30px;
  font-size: 14px;
  margin-top: 20px;
`;
const Button = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  max-width: 172px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 7px;
  margin-top: 40px;
  cursor: pointer;
`;
