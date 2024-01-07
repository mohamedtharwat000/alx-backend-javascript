export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
  }

  return array;
}
