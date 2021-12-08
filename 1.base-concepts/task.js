function solveEquation(a, b, c) {
    let arr = [];
    let diskrim = b ** 2 - 4 * a * c; //Вычисление дискриминанта

    if (diskrim < 0) {
        arr[0];
        arr[1];
    } else if (diskrim > 0) {
        let x = -b / (2 * a);
        arr[0] = x;
        arr[1];
    } else {
        let x1 = (-b + Math.sqrt(diskrim)) / (2 * a);
        let x2 = (-b - Math.sqrt(diskrim)) / (2 * a);
        arr[0] = x1;
        arr[1] = x2;
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    // код для задачи №2 писать здесь

    return totalAmount;
}