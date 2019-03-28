function hello(name) {
    console.log(arguments)
    if (arguments.length !== 1 || typeof (arguments[0]) !== "string") {
        throw new Error("Illegal execution")
    }
    return "Hello,  " + name;
}

function sum() {
    if (arguments.length === 0) {
        throw new SyntaxError("Required atlease 1 argument")
    }

    const args = Array.from(arguments);

    const flag = args.every(function (arg) {
        return typeof arg === "number";
    });

    if (!flag) {
        throw new SyntaxError("All args must be of type number")
    }

    let total = 0;
    for (let n of args) {
        total += n;
    }
    return total;
}


console.log(sum(1, 2, 3, 4, 5, 12, 13))



var x = 2;
function rand(flag) {
    var x;
    if (flag) {
        x = 20;
    }
    return x;
}


one();
var one = function () {
    console.log("one")
}

var a = 4;

function test1() {
    return a * a;
}

function addMaker(a) {
    var c = 10;
    return function (b) {
        return a + b + c;
    }
}

console.log(a)//


//var ctr=0

function makeCounter(start) {
    if(start <= 0){
        throw new Error("Invaild start")
    }
    var ctr = start;

    return {
        inc() {
            return ctr++;
        },
        dec() {
            return ctr--;
        },
        get counter(){
            return ctr;
        },

        set counter(value){
            if(value <= 0) throw new Error("value cannot be 0 or less")
            ctr=value
        }
    }
}

