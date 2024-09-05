import Dash from "dash"

const { NETWORK, MNEMONIC } = process.env

export const client = new Dash.Client({
  network: NETWORK,
  wallet: !MNEMONIC ? { offlineMode: true }: {
    mnemonic: MNEMONIC,
    offlineMode: false,
    unsafeOptions: {
      skipSynchronizationBeforeHeight: 1073000,
    },
  },
});
