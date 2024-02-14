export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((val) => val.startsWith(startString) && startString.length > 0)
    .map((val) => val.slice(startString.length))
    .join('-');
}
