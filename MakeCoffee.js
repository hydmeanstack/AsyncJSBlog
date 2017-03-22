/*
 Requirement : Prepare a coffee
 Steps :
 1. Go and get milk from shop
 2. Boil the milk
 3. Mix sugar and coffee => Tasty coffee ready :-)
 */

function goGetMilk() {
    setTimeout(
        function () {
            console.log('Step 1 - I got the milk from shop')
        },
        1000
    )
}

function boilMilk() {
    setTimeout(
        function () {
            console.log('Step 2 - Milk is hot')
        },
        2000
    )
}

function mixSugarAndCoffeePowder() {
    setTimeout(
        function () {
            console.log('Step 3 - Coffee powder and Sugar Added');
        },
        500
    )
}

function makeCoffee(){
  goGetMilk();
  boilMilk();
  mixSugarAndCoffeePowder();
}

makeCoffee();