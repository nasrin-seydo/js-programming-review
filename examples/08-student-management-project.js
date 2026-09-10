const students = []


function addStudent(name, age, grade) {
    const student = {
        name: name,
        age: age,
        grade: grade
    };
    students.push(student);
}

function displayStudents() {
    console.log("Student List:");
    for (const student of students) {
        console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
    }
}
addStudent("Alice", 20, "A");

displayStudents();

addStudent("Bob", 22, "B");

displayStudents();
