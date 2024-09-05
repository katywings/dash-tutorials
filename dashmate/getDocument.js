import { client } from "./client.js"

const getDocuments = async () => {
  try {
    const documents = await client.platform.documents.get(
      'helloWorld.note',
      { limit: null }
    )
    documents.forEach(n => console.log(n.toJSON().message))
  } catch (e) {
    console.error('Something went wrong:\n', e)
  } finally {
    client.disconnect()
  }
}

getDocuments()
