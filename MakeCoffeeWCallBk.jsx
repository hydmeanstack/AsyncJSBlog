/*
 Requirement : Prepare a coffee
 Steps :
 1. Go and get milk from shop
 2. Boil the milk
 3. Mix sugar and coffee => Tasty coffee ready :-)
 */

function prepareCoffee() {
    setTimeout(
        /* 1 */
        function goGetMilk() {
            console.log('Step 1 - I got the milk from shop');
            setTimeout(
                /* 2 */
                function boilMilk() {
                    console.log('Step 2 - Milk is hot');
                    setTimeout(
                        /* 3 */
                        function mixSugarAndCoffeePowder() {
                            console.log('Step 3 - Coffee powder and Sugar Added');
                        },
                        500
                    )
                },
                2000
            )
        },
        1000
    )
}