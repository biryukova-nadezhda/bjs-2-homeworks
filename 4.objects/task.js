function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let students1 = new Student("Надежда", "Женщина", 25);
let students2 = new Student("Владислав", "Мужчина", 24);
let students3 = new Student("Валерия", "Женщина", 23);
let students4 = new Student("Сергей", "Мужчина", 19);
let students5 = new Student("Николай", "Мужчина", 50);
let students6 = new Student("Самира", "Женщина", 42);

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {

    if (this.marks === undefined) {
        this.marks = [];
        this.marks.push(mark);

    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...arg) {
    
    if (this.marks === undefined) {
        this.marks = [];
        this.marks.push(...arg);

    } else {
        this.marks.push(...arg);
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
    this.marks.map(item => sum += item);
    return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
}
