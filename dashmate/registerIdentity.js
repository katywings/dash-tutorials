import { client } from "./client.js"

async function registerIdentity() {
  try {
    const identity = await client.platform.identities.register()
    console.log(`IDENTITY_ID="${identity.getId().toString()}"`)
  } catch (error) {
    console.error('Something went wrong:\n', error)
  } finally {
    client.disconnect()
  }
}

registerIdentity()
