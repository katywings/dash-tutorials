import Dash from "dash"

const client = new Dash.Client({
  network: "local",
  dapiAddress: [ "http://127.0.0.1:3001" ],
  wallet: {
    mnemonic: null,
    offlineMode: true
  },
})

async function createWallet() {
  try {
    const account = await client.getWalletAccount()
    const mnemonic = client.wallet.exportWallet()
    const { address } = account.getUnusedAddress()

    console.log("WALLET_ADDRESS=" + `"${address}"`)
    console.log("MNEMONIC=" + `"${mnemonic}"`)
  } catch (error) {
    console.error('Something went wrong:\n', error)
  } finally {
    client.disconnect()
  }
}

createWallet()
