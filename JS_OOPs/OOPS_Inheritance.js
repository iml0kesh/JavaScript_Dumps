class person {
  constructor(name, ph, address) {
    this.name = name;
    this.ph = ph;
    this.address = this.address;
  }
}

class Employee extends person {
  constructor(name, ph, address, org, salary, des) {
    super(name, ph, address);
    this.org = org;
    this.salary = salary;
    this.des = des;
  }
}

class Faculty extends person {
  constructor(name, ph, address, wage, hour) {
    super(name, ph, address);
    this.wage = wage;
    this.hour = hour;
    this.totalwage = hour * wage;
  }
}

let E = new Employee("lokesh", 8500770776, "NYC", 1200, "Intern");
console.log(E);
