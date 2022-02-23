import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 50%;
  min-height: 569px;
  background: #102c78 0% 0% no-repeat padding-box;
  opacity: 1;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    width: 100%;
    height: 745px;
    min-height: 745px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  width: 277px;
  margin: 50px 23px 0 86.5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    margin: 55.66px 0 0 0px;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    margin: 50px 23px 0 0.5px;
  } 
  @media (min-width: 768px) and (max-width: 1200px) {
    margin: 50px 23px 0px 61.5px;
  }
`;
const FooterImg = styled.img`
  height: 37.23px;
  width: 189.8px;
  margin: 0 0 24.84px 0;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    padding: 0 0 0 10px;
    margin: 0 0 22.45px 0;
  }
`;
const Text = styled.span`
  width: 297px;
  height: 77px;
  text-align: left;
  font: normal normal normal 18px/28px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  padding-left: 20px;
`;
const SecondColumn = styled.div`
  width: 135px;
  height: 220px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 183px;
    margin-left: -302px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0px !important;
  }
`;
const SubColOne = styled.div`
  width: 90px;
  margin: 54px 0 0 24px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 32px 0 0 24px;
  }
`;
const SubColTwo = styled.div`
  width: 100%;
  margin: 54px 0 0 70px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 32px 0 0 70px;
  }
`;
const ColHeading = styled.div`
  width: max-content;
  text-align: left;
  font: normal normal medium 18px/28px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 27px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-bottom: 17px;
  }
`;
const LinkContainer = styled.div`
  width: 90px;
  height: 172px;
  text-align: left;
`;
const LinkContainerSecond = styled.div`
  width: 165px;
  height: 134px;
  text-align: left;
`;
const Link = styled.a`
  font: normal normal normal 16px/38px Inter;
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
  cursor: pointer;
`;
const ContactRow = styled.div`
  margin: 116px 0 0 407px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 96px 0 0 28.95px;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    margin: 69px 0 0 184px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin: 120px 0 0 384px
  }
  @media (min-width: 820px) and (max-width: 1200px) {
    margin: 132px 0 0 384px !important;
  }
`;
const LinkContainerThird = styled.div`
  width: 95.95px;
  height: 106px;
  margin-bottom: 66.34px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-bottom: 25.34px;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.img`
  width: 17px;
  height: 14px;
  margin-right: 9px;
  background: #8ca6f0 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const CopyrightContainer = styled.div`
  margin: -52px 0 0 87px;
  display: flex;
  align-items: center;
  height: 15px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 35px 0 0 28.95px;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    margin: -52px 0 0 22px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin: -53px 0 0 86px
  }
`;
const XDCIcon = styled.img`
  width: 116.47px;
  height: 17px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

function FooterComponent() {
  return (
    <FooterContainer>
      <ColumnContainer>
        <Column>
          <FooterImg src="/images/smartHub.svg" alt="" />
          <Text>
            Easily govern your smart contract deployment with end-to-end
            lifecycle utility
          </Text>
        </Column>
        <SecondColumn>
          <SubColOne>
            <ColHeading>Tools</ColHeading>
            <LinkContainer>
              <Link href="https://observer.xdc.org/" target="_blank">
                Observatory
              </Link>
              <Link href="https://stats.xdc.org/" target="_blank">
                {" "}
                NetworkStats{" "}
              </Link>
              <Link
                href="https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?hl=en-US"
                target="_blank"
              >
                {" "}
                XDCPay{" "}
              </Link>
            </LinkContainer>
          </SubColOne>

          <SubColTwo>
            <ColHeading>Resources</ColHeading>
            <LinkContainerSecond>
              <Link
                href="https://medium.com/xdc-foundation-communications"
                target="_blank"
              >
                About XDC
              </Link>
              <Link href="https://docs.xdc.org/" target="_blank">
                {" "}
                Documentation{" "}
              </Link>
              <Link> Privacy Policy</Link>

              <Link> Terms and Conditions</Link>
            </LinkContainerSecond>
          </SubColTwo>
        </SecondColumn>
      </ColumnContainer>
      <ContactRow>
        <ColHeading>Contact Us</ColHeading>
        <LinkContainerThird>
          <ContactContainer>
            <SocialIcon src="/images/twitter-inactive.svg" />
            <Link href="https://twitter.com/XDCFoundation" target="_blank">
              {" "}
              Twitter
            </Link>
          </ContactContainer>
          <ContactContainer>
            <SocialIcon src="/images/telegram-inactive.svg" />
            <Link
              href="https://www.youtube.com/channel/UCXAAtlD-CRraNJKzDTF4pfg"
              target="_blank"
            >
              {" "}
              Youtube{" "}
            </Link>
          </ContactContainer>
          <ContactContainer>
            <SocialIcon src="/images/telegram-inactive.svg" />
            <Link href="https://www.facebook.com/XDCFoundation" target="_blank">
              {" "}
              Facebook{" "}
            </Link>
          </ContactContainer>
        </LinkContainerThird>
      </ContactRow>
      <CopyrightContainer>
        <XDCIcon src="/images/Group 12.svg" />
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default FooterComponent;
