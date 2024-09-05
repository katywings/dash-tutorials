import { client } from "./client.js"

const { IDENTITY_ID } = process.env

const createContract = async () => {
  try {
    const identity = await client.platform.identities.get(IDENTITY_ID)
    const contractDefinitions = {
      note: {
        type: 'object',
        properties: {
          message: { type: "string", position: 0 }
        },
        additionalProperties: false
      }
    }
    const contract = await client.platform.contracts.create(contractDefinitions, identity)
    await client.platform.contracts.publish(contract, identity)
    console.log("\nCONTRACT_ID=" + `"${contract.toJSON().id}"`)
    console.log('\nContract registered:\n\n', contract.toJSON())
  } catch (e) {
    console.error('Something went wrong:\n', e)
  } finally {
    client.disconnect()
  }
}

createContract()
