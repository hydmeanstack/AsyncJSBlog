/*
 Requirement : Prepare a coffee
 Steps :
 1. Go and get milk from shop
 2. Boil the milk
 3. Mix sugar and coffee => Tasty coffee ready :-)
 */

const goGetMilk = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log('Step 1 - I got the milk from shop');
                resolve();
            },
            1000
        )
    });
};


const boilMilk = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log('Step 2 - Milk is hot');
                resolve();
            },
            2000
        )
    });
};

const mixSugarAndCoffeePowder = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log('Step 3 - Coffee powder and Sugar Added');
                resolve()
            },
            500
        )
    });
};

/* Code looks synchronous in this function */
function* makeCoffee() {
    yield goGetMilk();
    yield boilMilk();
    yield mixSugarAndCoffeePowder();
}

const generator = makeCoffee();
/* 1 */
generator.next().value.then(() =>
    /* 2 */    
    generator.next().value.then(
              /* 3 */
        () => generator.next().value.then()
    )
);