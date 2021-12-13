import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
    getContractsList,
    addContract,
    hideContracts

  
}


function getHeaders() {
    return { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true }
}


async function getContractsList(requestData) {
    // let url = `${process.env.REACT_APP_CONTRACTS_SERVICE_URL}${httpConstants.API_END_POINT.GET_CONTRACTS_LIST}`;
    // let url = `http://localhost:3001/contract-list`;
    let url = `http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000/contract-list`;
    console.log("url----",url);
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};

async function addContract(requestData) {
    // let url = `${process.env.REACT_APP_CONTRACTS_SERVICE_URL}${httpConstants.API_END_POINT.GET_CONTRACTS_LIST}`;
    // let url = `http://localhost:3001/contract`;
    let url = `http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000/contract`;
    console.log("url----",url);
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};

async function hideContracts(requestData) {
    // let url = `${process.env.REACT_APP_CONTRACTS_SERVICE_URL}${httpConstants.API_END_POINT.GET_CONTRACTS_LIST}`;
    let url = `http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000/hide-contract`;
    console.log("url----",url);
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};

