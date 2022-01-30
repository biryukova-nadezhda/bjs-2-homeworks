/*class AlarmClock {
    constructor(timerId, alarmCollection = []) {
        this.alarmCollection = alarmCollection,
            this.timerId = timerId;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Параметр id будильника не задан")
        }

        let findEr = this.alarmCollection.some(arr => arr.id === id)

        if (findEr) {
            return console.error("Будильник с таким id уже существует")
        }

        let result = {
            id: id,
            time: time,
            callback: callback,
        }

        this.alarmCollection.push(result);
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex(obj => obj.id === id);

        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
            return console.log("Будильник успешно удален!");
        } else {
            return console.log("Такого будильника не существует...")
        }
    }

    getCurrentFormattedTime() {
        let now = new Date().toLocaleTimeString().slice(0, -3);
        return now;
    }

    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(elem => console.log("Будильник №" + elem.id + " заведен на " + elem.time));
    }

    clearAlarms() {
        stop();

    }
}*/

class AlarmClock {
    constructor(timerId, alarmCollection = []) {
        this.alarmCollection = alarmCollection,
            this.timerId = timerId;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Параметр id будильника не задан")
        }

        let findEr = this.alarmCollection.some(arr => arr.id === id)

        if (findEr) {
            return console.error("Будильник с таким id уже существует")
        }

        let result = {
            id: id,
            time: time,
            callback: callback,
        }

        return this.alarmCollection.push(result);
    }

    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => {
            if (item.id !== id) {
                return item.id
            }
        })
        let finish = this.alarmCollection.length;
        return start > finish ? true : false;
    }

    getCurrentFormattedTime() {
        let now = new Date().toLocaleTimeString().slice(0, -3);
        return now;
    }

    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(elem => console.log("Будильник №" + elem.id + " заведен на " + elem.time));
    }
}