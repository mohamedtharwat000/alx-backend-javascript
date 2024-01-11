export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (const name of reportWithIterator) {
    names += `${name} | `;
  }
  return names.slice(0, -3);
}
