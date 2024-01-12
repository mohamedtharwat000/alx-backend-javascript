export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) return resolve({ status: 200, body: 'Success' });
    return reject(Error('The fake API is not working currently'));
  });
}
