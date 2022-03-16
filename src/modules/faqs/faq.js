import React from "react";
import FaqItem from "./faqItem";
import { sessionManager } from "../../managers/sessionManager";
import { history } from "../../managers/history";

export default function Faqs(props) {
  const faqsList = [
    {
      id: 0,
      questionText: "What is Xmartly ?",
      answerText:
        "Xmartly is the Smart Contract Manager developed by XDC to provide easy contract management on the XDC blockchain.",
    },
    {
      id: 1,
      questionText: " What makes Xmartly contract management special ?",
      answerText:
        "Xmartly is first of a kind end-to-end smart contract manager for enterprise blockchain. It enables you to easily govern your smart contract deployment, view analytics for every on-chain activity and set different types of alerts to test the smart contract logic for your development purposes.",
    },
    {
      id: 2,
      questionText: "Can I check the details of my transactions ?",
      answerText:
        "Yes. Connect your XDCPay wallet and go to Transactions from the left side menu of the dApp. You get all the transaction details, including Transaction Hash, its status, functions, associated contracts, sender’s and receiver’s address and the date and time of transaction execution.",
    },
    {
      id: 3,
      questionText: "How can I add a smart contract ?",
      answerText:
        "Follow the below-mentioned steps to add a smart contract on Xmartly Connect your XDCPay wallet | Click on Add your Smart Contract.| Import your publicly verified contract by entering the contract address.| Click on Import Contracts.",
    },
    {
      id: 4,
      questionText: "Can I get notifications for a specific contract ?",
      answerText:
        "Yes. You can set an alert for any specific contract and choose a destination where you want to receive the alerts. You can receive notifications on Slack, Webhook or Email.",
    },
    {
      id: 5,
      questionText: "Where can I find the data for past transactions ?",
      answerText:
        "The Analytics section of the application represents data for all the transactions that happened over time. You can choose to view data for the last 7 days, 15 days, 25 days or 1 month.",
    },
  ];


  let user = "";

    try {
      user = window.web3.eth.accounts;
    } catch (e) {}

    const redirectToLogout = () => {
      sessionManager.removeDataFromCookies("isLoggedIn");
      sessionManager.removeDataFromCookies("accountAddress");
      sessionManager.removeDataFromCookies("userId");
      sessionManager.removeDataFromCookies("username");
      sessionManager.removeDataFromCookies("profilePicture");
      history.replace("/");
    };


  return (
    <>
    {(user==="")?(
      redirectToLogout()
  ):""}

    <div className="app-container">
      <div className="faqs-container">
        <div id="Heading-section">
          <h1 className="heading">FAQs</h1>
        </div>
        <ul className="ui-margin">
          <div className="faqs-list">
            {faqsList.map((eachFaq) => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </div>
        </ul>
      </div>
    </div>
    </>
  );
}
