import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    maxWidth: "700px",
    height: "550px",
  },
}));

export default function Settings(props) {
  const classes = useStyles();
  console.log("props", props.toggle);
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer style={{ padding: "15px 12px 10px 10px" }}>
              <Add>Settings</Add>
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src="/images/close.svg"
                onClick={props.click}
              />
            </SubContainer>
            <MainHeading style={{ padding: "15px 12px 10px 10px" }}>
              Configure Columns
            </MainHeading>
            <BorderDiv></BorderDiv>
            <Content>
              Change the layout of the transactions list and display only the
              columns and information that is most important to you.
            </Content>

            <BorderDiv></BorderDiv>
            <SubContainer
              style={{
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>Function</Heading>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={(event) =>
                    props.setToggle({
                      ...props.toggle,
                      function: event.target.checked,
                    })
                  }
                  checked={props.toggle.function}
                />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <BorderDiv></BorderDiv>
            <SubContainer
              style={{
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>Contracts</Heading>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={(event) =>
                    props.setToggle({
                      ...props.toggle,
                      contracts: event.target.checked,
                    })
                  }
                  checked={props.toggle.contracts}
                />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <BorderDiv></BorderDiv>
            <SubContainer
              style={{
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>From</Heading>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={(event) =>
                    props.setToggle({
                      ...props.toggle,
                      from: event.target.checked,
                    })
                  }
                  checked={props.toggle.from}
                />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <BorderDiv></BorderDiv>
            <SubContainer
              style={{
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>To</Heading>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={(event) =>
                    props.setToggle({
                      ...props.toggle,
                      to: event.target.checked,
                    })
                  }
                  checked={props.toggle.to}
                />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <BorderDiv></BorderDiv>
            <SubContainer
              style={{
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>When</Heading>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={(event) =>
                    props.setToggle({
                      ...props.toggle,
                      when: event.target.checked,
                    })
                  }
                  checked={props.toggle.when}
                />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <BorderDiv></BorderDiv>
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
  overflow: hidden;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 43.75rem;
  height: auto;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-left: 9px;
  margin-right: 5px;
`;
const Add = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #303134;
  margin-left: 1.5px;
`;

const MainHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;

  margin-left: 9px;
`;
const BorderDiv = styled.div`
  border-bottom: 1px solid #ededed;
  width: 100%;
`;
const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 0.625rem;
  padding: 15px 12px 8px 10px;
  margin-left: 9px;
`;
const Heading = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 1.25rem;
`;
