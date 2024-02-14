export default function hasValuesFromArray(set, arr) {
  for (const key of arr) {
    if (!(set.has(key))) return false;
  }
  return true;
}
