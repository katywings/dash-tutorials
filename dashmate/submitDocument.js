import { client } from "./client.js"

const { IDENTITY_ID } = process.env

const submitDocument = async () => {
  try {
    await client.platform.identities.topUp(IDENTITY_ID, 100000000)
    const identity = await client.platform.identities.get(IDENTITY_ID)
    const helloWorldDocument = await client.platform.documents.create(
      'helloWorld.note',
      identity,
      { message: 'Hello from Dash local network'}
    )
    await client.platform.documents.broadcast(
      {
        create: [helloWorldDocument],
        replace: [],
        delete: [],
      },
      identity
    )
    console.log(`DOCUMENT_ID="${helloWorldDocument.toJSON().$id}"`)
    console.log(helloWorldDocument.toJSON())
  } catch (e) {
    console.error('Something went wrong:\n', e)
  } finally {
    client.disconnect()
  }
}

submitDocument()
