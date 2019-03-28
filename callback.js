function task1() {
    console.log(1)
    console.log(2)
    console.log(3)
}
function task2(callback) {
    setTimeout(function () {
        console.log(4)
        console.log(5)
        callback(task4);
    }, 5000)
}

function task3(callback) {
    console.log(6)
    console.log(7)
    callback();
}

function task4() {
    setTimeout(function () {
        console.log(8)
        console.log(9)
    },2000)
}

function doWork() {
    try {
        task1();
        task2(task3);
    } catch (e) {

    }

}