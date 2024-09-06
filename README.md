- [Folder-Structure](#folder-structure)
- [Feedbacks](#feedbacks)
  - [First Look at Dash](#first-look-at-dash)
  - [First Look at Dashmate](#first-look-at-dashmate)

## Folder-Structure

- /dash -> First Look at Dash (Stopped at "retrieveName" Step)
- /dashmate -> First Look at Dashmate

## Feedbacks

### First Look at Dash

URL: https://ajcwebdev.com/first-look-dash/

I wrote these feedbacks down while going through the tutorial and cleaned them up a bit afterwards:

1. The tutorial starts with the heading `Dash Platform Overview` following with a historical explanation about `Dash`. I think it would make sense to split this up, e.g. by moving the about `Dash` to a little section before the `Dash Platform Overview`. This would make sure that `Dash` and `Dash Platform` are not perceived as the same thing.
2. The image of the architectural overview of Dash Platform is very small. Reducing the outer padding surrounding the diagram, could make it a bit more readable.
3. The `Setup and Configure Node Project` chapter starts without any connection to the previous one. When you come to this chapter the first thought is like: "Oh we are starting with the tutorial right now". I recommend to add (more) sentences connecting the different chapters together. Otherwise the tutorial feels like an instruction for a machine.
4. `The network will be set to testnet via the NETWORK environment variable in .env.`: A link to a list & description of the available networks would be useful here.
5. The sentence `Because we haven’t created a wallet yet, mnemonic is set to null to indicate we want a new wallet to be generated.` mentions `mnemonic`, but the `client.js` script above the sentence doesn't have any line with `mnemonic`, nor `null`. The sentence `replace null with an existing wallet` also mentions `null`. Which `null`? Consider rewriting these sentences to better align with what the script shows, or change the script to include `mnemonic: null`.
6. The http://faucet.testnet.networks.dash.org/ generator and related links respond with blank pages after sending test funds - I recommend to atleast show a "Success" label or something.
7. `skipSynchronizationBeforeHeight` should be explained. The text should answer questions like: Why is it needed? Why the specific value `990000`? Whats unsafe about it?
8. `LABEL` (`retrieveName`) needs to follow some very specific rules (contested resources). Failing these rules does result in silent errors -> ergo you don't know that you failed the rules. Advice: add error handling for the `LABEL` rules.
9. Sometimes you don't receive enough credits to run `topUpIdentities`, so you have to wait 1 hour before you can continue with the tutorial. I recommend to change the faucet limitations in a way that prevents this from happening - e.g. allow mulitple faucet fund requests for wallets below the required currency amount.
10. `View on block explorer: https://platform-explorer.com/xyz` wrong url - should be `https://testnet.platform-explorer.com/xyz`
11. General idea: add sentences like `To learn more about "xyz" go to "Article XYZ"` to the text, to lead readers to useful resources.
12. Why is there no cli for some of these scripts? (Or is there one and the tutorial doesn't mention it?)
13. dashUniqueIdentityId -> https://github.com/dashpay/platform/issues/1999#issuecomment-2254980339
14. The Next App comes very late in the tutorial. Consider moving it before the `Data Contracts` and directly show the data contract features via the next app. E.g. The `Documents` could be used to implement some sort of `Todo` App in the tutorial.
15. Problem with Umlaute in the funds-generator:
http://faucet.testnet.networks.dash.org/
![](./umlaute.png)

### First Look at Dashmate

URL: https://ajcwebdev.com/first-look-dashmate/

1. `pnpm install -g dashmate` failed with error "Command failed".
2. podman docker didn't work, Fedora is still on docker-compose v1, dashmate requires v2. Consider supporting docker-compose v1 or add a `--ignore-version-checks` to dashmate, so that users atleast can give the installer a try on subpar environments.
3. "Setup JavaScript Project" -> Add a joiner-text e.g. "Lets now 1. take a look how you can interactive with "
4. In `Mint Local tDash with Wallet Command`, quick idea: source the .env file like so: `bash -c 'source .env && dashmate wallet mint --config local_seed --address=$WALLET_ADDRESS 50'`
5. `submitDocument.js` is not explained enough. E.g. why does it have the `await client.platform.identities.topUp(IDENTITY_ID, 100000000)` line?
6. In general I think the tutorials should go more into details about what the copy-pasted scripts actually do. E.g. in `submitDocument.js` whats the difference between `.create` vs `.broadcast`?
7. What happens if `client.disconnect()` is missing? Doesn't the client automatically disconnect on process exit?
8. `getDocuments` and `geDocument` is mixed up: 
![](./getDocuments.png)