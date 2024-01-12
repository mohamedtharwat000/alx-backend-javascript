export default function divideFunction(numerator, denominator) {
  try {
    return (numerator / denominator);
  } catch (err) {
    return Error('cannot divide by 0');
  }
}
