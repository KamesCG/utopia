/* --- Global Dependencies --- */
import React from 'react'
import { ethers} from "ethers";
/* --- Local Dependencies --- */
import { Web3Context } from 'context/Web3Context'

let etherscanProvider = new ethers.providers.EtherscanProvider('rinkeby');
console.log(etherscanProvider)

/* --- Component --- */
class Contexts extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
        accounts:{},
        contracts: {},
        providers: {},
        transactions: {},
        balance: null,
        provider: new ethers.providers.Web3Provider(window.web3.currentProvider),
        etherscan: new ethers.providers.EtherscanProvider('rinkeby'),
        /**
         * Context Functions
         * @desc Manage the global state for Web3 components.
         */
        updateTransactions: async address => {
          // let txs = await this.etherscan.getHistory(address, 5, 3271759)
          let txs = await this.state.etherscan.getHistory(address, 5, 3271759)
          console.log(txs)
          this.setState({
            ...this.state,
            transactions:{
              ...this.state.transactions,
              [address]: txs
            }
          })
        },
        updateBalance: async address => {
          let balance = await this.state.provider.getBalance(address)
          balance = ethers.utils.formatEther(balance)
          this.setState({
            ...this.state,
            balance
          })
        },
        updateAccountBalance: async address => {
          let balance;
          /**
           * IF the address is UNDEFINED lookup the ADDRESS 
           * AND get the balance of the defaul ADDRESS
           */
          if (typeof address === 'undefined') {
            address = await this.state.provider.listAccounts()
            balance = await this.state.provider.getBalance(address[0])
            balance = ethers.utils.formatEther(balance)
             this.setState({
               ...this.state,
               balance
           })
           /**
            * ELSE get the balance of the provided Address
            */
          } else {
            balance = await this.state.provider.getBalance(address)
            balance = ethers.utils.formatEther(balance)
            this.setState({
              ...this.state,
              accounts:{
                ...this.state.accounts,
                [address]: balance
              }
            })
          }
        },
        updateProvider: (provider) => this.setState({
          provider: provider
        }),
      }
    }
  


  render(){
    return(
      <Web3Context.Provider value={this.state}>
        {this.props.children}
      </Web3Context.Provider>
    )
  }
}

export default Contexts