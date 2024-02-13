export default function getStudentIdsSum(arr = []) {
  return arr.reduce((accumulator, student) => accumulator + student.id, 0);
}
