function rest(a, b, ...others) {
    console.log(arguments)
}


function sum(...args) {
    let total = 0;
    for (let a of args) {
        total += a
    }
    return total;
}