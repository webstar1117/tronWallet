// import { computeAddress, genPrKey, getBase58CheckAddress } from './crypto'
var computeAddress = require("./crypto").computeAddress;
var genPrKey = require("./crypto").genPrKey;
var getBase58CheckAddress = require("./crypto").getBase58CheckAddress;
/**
 * Generate a new account
 */
const generateAccount = () => {
  const { publicKey, privateKey } = genPrKey()
  const addressBytes = computeAddress(publicKey)
  const address = getBase58CheckAddress(addressBytes)

  return { address, privateKey, addressBytes }
}

exports.generateAccount = generateAccount;