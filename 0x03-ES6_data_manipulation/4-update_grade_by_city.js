export default function updateStudentGradeByCity(arr = [], city, newGrade) {
  return arr
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrade,
    }));
}
