const GnosisSafe = artifacts.require('./safe/GnosisSafe.sol');
const deploy = true

const owners = ['0x33A464CdA2CA86710b6d37F20DB92192E4595DCE']

module.exports = !deploy ? null : (deployer) => {
  deployer.deploy(GnosisSafe,
    owners, // @param _owners List of Safe owners.
    1, // @param _threshold Number of required confirmations for a Safe transaction.
    '', // [OPTIONAL] @param to Contract address for optional delegate call. 
    '' // [OPTIONAL] @param data Data payload for optional delegate call.
  );
  );
};
