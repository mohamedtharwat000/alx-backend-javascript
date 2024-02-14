export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((value) => {
    if (value[1] === 1) map.set(value[0], 100);
  });
  return map;
}
