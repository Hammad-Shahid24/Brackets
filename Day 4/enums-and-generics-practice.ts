enum GradeLevel {
  Freshman,
  Sophomore,
  Junior,
  Senior,
}

interface Student {
  name: string;
  grade: GradeLevel;
  scores: number[];
  outOf: number;
}

function filterBy<T>(items: T[], filter: (item: T) => boolean): T[] {
  return items.filter(filter);
}

const students: Student[] = [
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
const passingStudents = filterBy<Student>(students, (student) => {
  const totalScore = student.scores.reduce((a, b) => a + b, 0);
  return totalScore / student.outOf > 0.6;
});

// filter senior students
const seniorStudents = filterBy<Student>(students, (student) => {
  return student.grade === GradeLevel.Senior;
});

console.log("Filter by scores: ", passingStudents);
console.log("Filter by grade: seniorStudents: ", seniorStudents);
