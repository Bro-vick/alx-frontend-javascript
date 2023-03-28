export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      if (grade) {
        return { ...student, grade: grade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}