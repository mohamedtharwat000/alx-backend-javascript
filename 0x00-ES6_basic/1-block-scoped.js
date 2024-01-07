export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
console.log(taskBlock(true));
console.log(taskBlock(false));
