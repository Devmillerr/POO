export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    return `Nombre: ${this.name} - Edad: ${this.age}`;
  }
}
