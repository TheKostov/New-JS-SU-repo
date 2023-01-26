function fruitShopping(fruit, grams, moneyPerKilo){
    console.log(`I need $${(moneyPerKilo * (grams/1000)).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)
}



fruitShopping('orange', 2500, 1.80);