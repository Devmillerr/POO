import { Student } from "./conponents/Student.js";
import { Teacher } from "./conponents/Teacher.js";
import { Subject } from "./conponents/Subject.js";

document.getElementById("student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("student-name").value;
  const age = document.getElementById("student-age").value;
  const grade = document.getElementById("student-grade").value;

  const student = new Student(name, age, grade);

  const studentList = document.getElementById("student-list");
  const listItem = document.createElement("li");
  listItem.textContent = student.displayInfo();
  studentList.appendChild(listItem);

  document.getElementById("student-form").reset();
});

document.getElementById("teacher-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("teacher-name").value;
  const age = document.getElementById("teacher-age").value;
  const subject = document.getElementById("teacher-subject").value;

  const teacher = new Teacher(name, age, subject);

  const teacherList = document.getElementById("teacher-list");
  const teacherItem = document.createElement("li");
  teacherItem.textContent = teacher.displayInfo();
  teacherList.appendChild(teacherItem);

  document.getElementById("teacher-form").reset();
});

document.getElementById("subject-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("subject-name").value;
  const code = document.getElementById("subject-code").value;

  const subject = new Subject(name, code);

  const subjectList = document.getElementById("subject-list");
  const subjectItem = document.createElement("li");
  subjectItem.textContent = subject.displayInfo();
  subjectList.appendChild(subjectItem);

  document.getElementById("subject_form").reset();
});
