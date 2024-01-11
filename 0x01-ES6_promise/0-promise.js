export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Success!');
  });
}
const response = getResponseFromAPI();
console.log(response instanceof Promise);
