/* eslint-disable */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter(student => student.location === city)
    .map(student => {
      let grade = newGrades.find(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
