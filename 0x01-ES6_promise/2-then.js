export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => ({ status: 200, body: 'success' }))
    .catch((error) => Error())
    .finally(() => console.log('Got a response from the API'));
}
