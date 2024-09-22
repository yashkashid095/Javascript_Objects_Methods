//when we call forEach helper we pass anonymous callback function
//this funtion is called one time for every element in array and whatever we have defined in that logic happens
const person=['yash','anil','kashid']
// const arr=element=>console.log(element )
// person.forEach(arr)

// person.forEach((elements,index,arr)=>console.log(elements,index,arr))
const num=[1,2,3,4,5]
let sum=0
const add=item=>{
sum+=item;
}
num.forEach(add)
console.log(sum)