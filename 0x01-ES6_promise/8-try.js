export default function divideFunction(numerator, denominator) {
  try {
    return numerator / denominator;
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}
