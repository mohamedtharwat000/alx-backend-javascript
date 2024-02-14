export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((value, item) => {
    if (value === 1) map.set(item, 100);
  });
  return map;
}
