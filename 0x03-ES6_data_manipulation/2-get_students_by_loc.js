export default function getStudentsByLocation(getListStudents, city) {
    return getListStudents.filter((list) => list.location === city);
}