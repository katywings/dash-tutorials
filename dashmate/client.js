import Dash from "dash"

const { NETWORK, DAPI_ADDRESS_URL, MNEMONIC, CONTRACT_ID } = process.env

export const client = new Dash.Client({
  network: NETWORK,
  dapiAddress: [ DAPI_ADDRESS_URL ],
  wallet: {
    mnemonic: MNEMONIC,
  },
  apps: {
    helloWorld: {
      contractId: CONTRACT_ID,
    },
  },
})
