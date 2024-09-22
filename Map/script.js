// Map is built in data structure introduced in ES6 that allows you to store key-value pairs where both the keys and values can be of any data type. it is similar to object,but with few key differences

// Keys can be of any data type:- unlike objects ,where keys are limited to strings and symbols,map allows us to use any data type as key ,including numbers,booleans,objects, and even other Map instances.

// Maintains insertion order:- Map preserves the order of key value pairs as they are inserted ,while objects can not be guranteed to be in specific order

// Iteration:- map provides built in methods for easy iteration over its element

// if  we are going to create map need to write new keyword followed by Map constructor

const map=new Map()

// if we want to provide a new value to the map follow the folowin steps
const keyOne="string"
const keyTwo={}
const keyThree=function(){}
// map.set() //Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map.set(keyOne,"Value of key one")
map.set(keyTwo,"value of key two")
map.set(keyThree,"value of key three")
console.log("iterating over the keys")
// map.delete(keyTwo)
// console.log(map)
// console.log(map.size)
map.set(keyThree,"value of k")
 for(let key of map.keys())
 {
    console.log(key)
 }


 console.warn("iterating over values")
 for(let val of map.values())
 {
    console.log(val)
 }

 console.error("iterating over keys and value")
 for(let[keys,values] of map)
 {
    console.log(`${keys}-->${values}`)
 }


//  practicing a map assignment
