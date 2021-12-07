import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function WalletPopUp(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <RowContainer>
              <Add>
                Connect Wallet{" "}
                <CrossIcon
                  alt=""
                  src="/images/XDC-Cross.svg"
                  onClick={props.click}
                />
              </Add>
            </RowContainer>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
const CrossIcon = styled.img`
  cursor: pointer;
  width: 16px;
  transition: width 0.1s;
  &:hover {
    width: 18px;
    box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
  }
`;

const ApplyButton = styled.div`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  padding-top: 6px;
  font-size: 14px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
`;
const CancelButton = styled.div`
  top: 432px;
  left: 1179px;
  width: 72px;
  height: 34px;
  border: 1px solid #3163f0;
  opacity: 1;
  padding-top: 6px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  margin-right: -11px;

  color: #3163f0;
`;
const ButtonA = styled.div`
  width: 38px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 6px;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  color: #3062ef;
  text-size: 14px;
  cursor: pointer;
`;
const ButtonB = styled.div`
  width: 78px;
  text-size: 14px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
`;
const ButtonC = styled.div`
  width: 78px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
  text-size: 14px;
  cursor: pointer;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  // color: #767c93;
  color: #b7b7b7;
  height: 40px;
  padding: 10px;
  width: 352px;
  height: 34px;
  padding-top: 5px;
  position: relative;
`;
const DropDownTwo = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b7b7b7;
  height: 34px;
  padding-left: 9px;
  padding-top: 6px;

  width: 160px;

  margin-right: 50px;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  padding-bottom: 20px;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 563px;
  height: 359px;
`;
const Add = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #303134;
  padding-top: 15px;
  padding-bottom: 5px;
  margin-left: -12px;
  border-bottom: 1px solid grey;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 0.625rem;
  //   padding: 15px 12px 8px 10px;
  // padding: 0.938rem 0.75rem 0.5rem 0.625rem;
`;
const LastRowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding-bottom: 10px;
`;
const RowBoxOne = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 400px;
`;
const RowContainer = styled.div`
  //   padding: 18px 14px 12px 12px;
`;
const NewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 3 00px;
  padding-bottom: 20px;
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: end;
  /* width: 100%; */
  max-width: 503px;
`;
const NewContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 515px;
  padding-bottom: 20px;
`;
