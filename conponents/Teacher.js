import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  displayInfo() {
    return `Nombre: ${this.name} - Edad: ${this.age} - Asignatura: ${this.subject}`;
  }
}
