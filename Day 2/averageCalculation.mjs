import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const students = [];

const getStudentInfo = () => {
  rl.question("Enter name for student: ", (name) => {
    rl.question("Enter score for student: ", (score) => {
      students.push({ name, score: parseFloat(score) });
      rl.question(
        "Do you want to add another student? (yes/no): ",
        (answer) => {
          if (answer.toLowerCase() === "yes") {
            getStudentInfo();
          } else {
            let totalScore = 0;
            for (const student of students) {
              totalScore += student.score;
            }
            const averageScore = totalScore / students.length;
            console.log(`The average score is: ${averageScore}`);
            rl.close();
          }
        }
      );
    });
  });
};

getStudentInfo();
