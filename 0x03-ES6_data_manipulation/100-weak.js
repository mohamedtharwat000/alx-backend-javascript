export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let endpointNumber = weakMap.get(endpoint);
  if (endpointNumber) {
    weakMap.set(endpoint, (endpointNumber += 1));
    if (endpointNumber >= 5) throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, 1);
  }
}
