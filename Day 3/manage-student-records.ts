interface Student {
  name: string;
  age: number;
  scores: number[];
}

class StudentRecords {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStudentByName(name: string): Student | undefined {
    return this.students.find((student) => student.name === name);
  }
}

const obj = new StudentRecords();

obj.addStudent({
  name: "Hammad",
  age: 23,
  scores: [90, 80, 85],
});

obj.addStudent({
  name: "Ali",
  age: 25,
  scores: [80, 70, 75],
});

console.log(obj.getStudents());

console.log(obj.getStudentByName("Hammad"));

// Output

// [ { name: 'Hammad', age: 23, scores: [ 90, 80, 85 ] }, { name: 'Ali', age: 25, scores: [ 80, 70, 75 ] } ]

// { name: 'Hammad', age: 23, scores: [ 90, 80, 85 ] }
