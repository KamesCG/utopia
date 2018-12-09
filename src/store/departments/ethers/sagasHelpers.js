/* ------------------------- External Dependencies -------------------------- */
import { put } from 'redux-saga/effects';
import actions from './actions'
import { networkRouting, isAddress } from "./helpers";
import { REQUEST, SUCCESS, FAILURE } from "store/departments/utils";

/**
 * Wrapper for the ethers.provider.getTransactionCount method
 * @method transactionsBatchProcess
 * @param {Object} payload 
 * @param {Object} metadata 
 * 
 * @desc @kamescg I originally wrote this method to do tricky batch processing 
 * requests when scanning the ENS address as an experiment. Need to extract code
 * from the BuidlBox repo project.
 */
export function * transactionsBatchProcess({payload, metadata}) {
  try {
    const { 
      ethereumAddressList,
      ethereumGasPrice,
      ethereumGasLimit,
      ethereumTokenAmount
    } = payload

    var overrideOptions = {
        gasLimit: ethereumGasLimit || 250000,
        gasPrice: ethereumGasPrice || 9000000000,
    };
    const results = []
    const list = ethereumAddressList.split(",").filter(address=>isAddress(address))
    for (let i of list) {
      let result = yield window.ethereum.contracts.tokenContract.transfer(i, Number(ethereumTokenAmount), overrideOptions)
      results.push(result)
    }
  
    yield put(actions.transactionBatchProcess(SUCCESS)(
      results,
      metadata,
    ))
  } catch (err) {
    yield put(actions.transactionBatchProcess(FAILURE)(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}