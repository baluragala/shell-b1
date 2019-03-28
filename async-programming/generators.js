function* generateNumbers() {
    console.log(1);
    console.log(2);
    console.log(3)
    yield "aaa";
    console.log(11);
    console.log(21);
    console.log(31)
    yield {};
    console.log(12);
    console.log(22);
    console.log(32)
    yield [];
    console.log(13);
    console.log(23);
    console.log(33)
    yield false;
    console.log(14);
    console.log(24);
    console.log(34)
    console.log(14);
    console.log(24);
    console.log(34)
}


const goGetMilk = function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("Step 1 - I got the milk from shop");
        resolve();
      }, 1000);
    });
  };
  
  const boilMilk = function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("Step 2 - Milk is hot");
        resolve();
      }, 2000);
    });
  };
  
  const mixSugarAndCoffeePowder = function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("Step 3 - Coffee powder and Sugar Added");
        resolve();
      }, 500);
    });
  };
  
  function* makeCoffee() {
    yield goGetMilk();
    yield boilMilk();
    yield mixSugarAndCoffeePowder();
  }
  
  const generator = makeCoffee();
  generator
    .next()
    .value.then(() =>
      generator.next().value.then(() => generator.next().value.then())
    );