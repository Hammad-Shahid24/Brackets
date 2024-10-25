var StudentRecords = /** @class */ (function () {
  function StudentRecords() {
    this.students = [];
  }
  StudentRecords.prototype.addStudent = function (student) {
    this.students.push(student);
  };
  StudentRecords.prototype.getStudents = function () {
    return this.students;
  };
  StudentRecords.prototype.getStudentByName = function (name) {
    return this.students.find(function (student) {
      return student.name === name;
    });
  };
  return StudentRecords;
})();
var obj = new StudentRecords();
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
