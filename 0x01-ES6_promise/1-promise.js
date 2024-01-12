export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success!' });
    reject('The fake API is not working currently');
  });
}
