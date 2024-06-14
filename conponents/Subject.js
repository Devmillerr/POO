export class Subject {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
  displayInfo() {
    return `Nombre: ${this.name}, Codigo: ${this.code}`;
  }
}
