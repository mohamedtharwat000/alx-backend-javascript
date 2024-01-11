export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx of array) {
    idx = appendString + idx;
    newArray.push(idx);
  }

  return newArray;
}
