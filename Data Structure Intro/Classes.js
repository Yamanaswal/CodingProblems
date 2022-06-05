class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = []
    }

    getFullName() {
        return `YOur full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b; })
        return sum / this.scores.length;
    }

    static EnrollStudents() {
        return "ENROLLING STUDENTS!"
    }
}


// Create & Call Class Student

console.log("Create & Call Class Student -------------------------");
console.log(new Student("YAMAN", "Aswal", 3));
let student1 = new Student("May", "Kumar");
let student2 = new Student("TEST", "", 6);
console.log(student1);
console.log(student2);

student1.grade = 2
student2.firstName = 2
console.log(student1);
console.log(student2);

console.log("Craete Array ------------------------ ");
let data = new Array(1, 2, 3, 4);
console.log(data);
data.push("22");
console.log(data);

console.log("Methods in Classes ---------------------");
console.log(student1.getFullName());
student2.addScore(22);
student2.addScore(56);
console.log(student2);
console.log(student2.markLate());
console.log(student2.calculateAverage());

console.log("STATIC METHODS ------------------------ ");
console.log(Student.EnrollStudents());
console.log(student2.EnrollStudents);



// Class With Static Method 
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755