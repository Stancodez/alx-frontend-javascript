export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employees = [];

  for (const department of Object.keys(allEmployees)) {
    employees.push(...allEmployees[department]);
  }

  return employees[Symbol.iterator]();
}

