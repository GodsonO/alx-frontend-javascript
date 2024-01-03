export default function handleResponseFromAPI(promise) {
  const stbody = { status: 200, body: 'success' };

  return promise
    .then(() => stbody)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
