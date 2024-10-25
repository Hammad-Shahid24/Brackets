var GradeLevel;
(function (GradeLevel) {
    GradeLevel[GradeLevel["Freshman"] = 0] = "Freshman";
    GradeLevel[GradeLevel["Sophomore"] = 1] = "Sophomore";
    GradeLevel[GradeLevel["Junior"] = 2] = "Junior";
    GradeLevel[GradeLevel["Senior"] = 3] = "Senior";
})(GradeLevel || (GradeLevel = {}));
function filterBy(items, filter) {
    return items.filter(filter);
}
var students = [
    {
        name: "Hammad",
        grade: GradeLevel.Senior,
        scores: [85, 90, 88],
        outOf: 300,
    },
    {
        name: "Ali",
        grade: GradeLevel.Junior,
        scores: [20, 30, 50],
        outOf: 300,
    },
    {
        name: "Zain",
        grade: GradeLevel.Sophomore,
        scores: [85, 85, 88],
        outOf: 300,
    },
    {
        name: "Amir",
        grade: GradeLevel.Freshman,
        scores: [90, 85, 88],
        outOf: 300,
    },
];
// filter passing students
var passingStudents = filterBy(students, function (student) {
    var totalScore = student.scores.reduce(function (a, b) { return a + b; }, 0);
    return totalScore / student.outOf > 0.6;
});
// filter senior students
var seniorStudents = filterBy(students, function (student) {
    return student.grade === GradeLevel.Senior;
});
console.log("Filter by scores: ", passingStudents);
console.log("Filter by grade: seniorStudents: ", seniorStudents);
