const fruits=["apple","banana","cherry"]
console.log(fruits[1])
fruits[0]="mango"
console.log(fruits)
fruits.push("orange")
fruits.unshift("grapes")
console.log("updated fruits array:",fruits)
console.log("Now removing last and first element from an array")
fruits.pop()
fruits.shift()
console.log(fruits)
console.log("now we are going to iterate over an array using loops")
for(i=0;i<fruits.length;i++)
{
    console.warn(fruits[i]);
}
console.log("now we are going to use for each method to iterate over an array")
fruits.forEach(element=> console.log(element))
console.log("now we are going to find out lenght of an array")
let length=fruits.length
console.log("Lenght of an array:",length)
 console.log("now we are going to concnate our fruit array with another array")
 const fruits1=['kiwi','pineapple']
const combinedArray=fruits.concat(fruits1)
console.log(fruits)
console.info("newly Combined array",combinedArray)
console.warn("creating a new array that takes first two elements of an array")
const miniFruits=fruits.slice(0,2)
console.log(miniFruits)
console.log("we are going to remove elements from an array")
console.log("current array",fruits)
fruits.splice(1,1,"strawberry","blueberry")
console.error("after removing and deleting an array")
console.log(fruits)
console.log("Cheking wheter 'tomato' is presnt  or not:",fruits.indexOf('mango'))//if the element is not present in an array it will return -1
console.log(fruits.includes('mango'))
console.log("we will  be writing code to remove duplicate number from an array")
const arr=[1,2,3,4,4,5,5,6]

const remvoingDuplicates= arr1=> [...new Set(arr1)]
const upadtedArr=remvoingDuplicates(arr)
console.log(upadtedArr)
 console.log("Flattening of an array it means converting a nested array into single level array which is to say into one dimensinal array ")
 //using flat method
 const nested=[[1,2],[3,4],[5,6,7]]
 console.log("nested array befror we flatten",nested)
 const flattedArray=nested.flat()
 console.log(flattedArray)