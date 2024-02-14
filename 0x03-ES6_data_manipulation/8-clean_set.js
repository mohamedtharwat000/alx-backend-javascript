export default function cleanSet(set, start) {
  if (start === '' || typeof start !== 'string' || !(set instanceof Set)) {
    return '';
  }
  return Array.from(set)
    .filter((e) => e.startsWith(start))
    .map((e) => e.slice(start.length))
    .join('-');
}
