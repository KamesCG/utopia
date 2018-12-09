import React from 'react';
import { ethers} from "ethers";

const providers = ethers.providers

export const Web3Settings = {
    provider: new ethers.providers.Web3Provider(window.web3.currentProvider)
};

export const Web3Context = React.createContext({
  provider: Web3Settings.provider
});


const Web3Initialize = ()=> {
  if (!window.web3) {
    return false
  } else {
    return 
  }
}

// if (typeof web3 !== 'undefined') {
//   var web3Provider = new ethers.providers.Web3Provider(web3.currentProvider, ethers.providers.networks.ropsten);
//   web3Provider.getBalance("..some address.."). then(function(balance) {
//     var etherString = ethers.utils.formatEther(balance);
//     console.log("Balance: " + etherString);
//   });
// }