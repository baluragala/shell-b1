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
  
  async function makeCoffee() {
    await goGetMilk();
    await boilMilk();
    await mixSugarAndCoffeePowder();
  }
  
 makeCoffee();