const assert = require('assert')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]



function toObject(car){

  return {
    name:car[0],
    brand:car[1],
    year:car[2]

  }
}

assert.deepEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })

