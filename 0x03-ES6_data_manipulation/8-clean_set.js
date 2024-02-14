export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((val) => val.startsWith(startString) && startString !== '')
    .map((val) => val.slice(startString.length))
    .join('-');
}
