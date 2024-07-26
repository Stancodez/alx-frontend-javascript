class HolbertonCourse {
  constructor(name, length, students) {
    // Type checks
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Attribute assignment
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

// Example usage:
try {
  const course = new HolbertonCourse('Math', 6, ['Alice', 'Bob']);
  console.log(course.name); // Output: Math
  console.log(course.length); // Output: 6
  console.log(course.students); // Output: ['Alice', 'Bob']

  course.name = 'Science';
  course.length = 8;
  course.students = ['Charlie', 'Dave'];

  console.log(course.name); // Output: Science
  console.log(course.length); // Output: 8
  console.log(course.students); // Output: ['Charlie', 'Dave']
} catch (error) {
  console.error(error);
}
