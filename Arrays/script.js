//we can decalre array using array literals
//const arr=[1,2,3,4,5]
//using array constructor
//const arr=new Array(1,2,3,4,5);
//we can create an array with specified length
//const arr=new Array(5);
//we can create an empty array
//const arr=[]
//const arr=new Array();



const arr=new Array()
console.log(typeof arr)
arr.push(1,2,3,4,5,6,7,8,9)
console.log(arr)
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr.length)
arr.unshift(0,"apple","baanana")
console.log(arr)
arr.shift()
console.log(arr)
arr.sort()
console.log(arr)
const arr1=['a','b','c']
const clonedArrayUsingMethodApply=arr1.concat.apply(arr1,arr)//we can copy element of one array or more than that using apply method


const clonedArray=[...arr,...arr1] //using spread operator we can copy element of ine array or more than that into another array spread operator is used to iterate over array and coverts it into single seperate element
// console.log(clonedArray)
console.log(arr.includes('apple'))//if we want to check whether a particular element exist in given array or not we use includes() method
const last=arr.pop()
const arr2=["hello","I","AM","YASH"]
console.log(last)
console.log(clonedArrayUsingMethodApply)
const cloneArrayUsingMethodConcat=arr2.concat(arr1,arr)
console.log(cloneArrayUsingMethodConcat)
const arr4=[1,2,3,4,5]
console.log(arr4)
console.info("array reversed")
arr4.reverse()
console.log(arr4)
console.log(arr4.indexOf(1))
const a=arr4.slice(1,3) //it does not change original array
console.log(a)