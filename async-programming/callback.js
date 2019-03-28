

/**
 * Created by moksha on 08/01/17.
 */

/*
 Requirement : Prepare a coffee
 Steps :
 1. Go and get milk from shop
 2. Boil the milk
 3. Mix sugar and coffee => Tasty coffee ready :-)
 */

function goGetMilk(boilMilk) {
    setTimeout(function () {
        console.log("Step 1 - I got the milk from shop");
        boilMilk(mixSugarAndCoffeePowder);
    }, 1000);
}

function boilMilk(mixSugarAndCoffeePowder) {
    setTimeout(function () {
        console.log("Step 2 - Milk is hot");
        mixSugarAndCoffeePowder();
    }, 2000);
}

function mixSugarAndCoffeePowder() {
    setTimeout(function () {
        console.log("Step 3 - Coffee powder and Sugar Added");
    }, 100);
}

(function makeCoffee() {
    goGetMilk(boilMilk);
})();

