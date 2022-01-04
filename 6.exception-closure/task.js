//задача 1
function parseCount(str) {
    let parse = Number.parseInt(str, 10);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    } else {
        return parse;
    }
}

function validateCount(str) {

    try {
        let parse = parseCount(str);
        if (isNaN(parse)) {
            throw new Error("Ошибка");
        } else {
            return parse;
        }
    } catch (error) {
        return error;
    }
}

//Задача 2
class Triangle {
    constructor(a, b, c) {
        if (b + c > a && a + c > b && a + b > c) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error("Треугольник с такими сторонами не существует");
        }

    }

    getPerimeter() {
        let perimetr = this.a + this.b + this.c;
        return perimetr;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let s = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return s;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
        };
    }
}