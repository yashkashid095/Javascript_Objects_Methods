//whatever the map helper returns that is stored in a new array

const arr=['yash','anil','kashid','akluj','malshiras','solapur']
const myarr=arr.map(element=>element+"ok")
console.warn(myarr)

//we are going to convert array of this objects into aarray of array
let people=[
    {name:'yash',last_Name:'kashid'},
    {name:'ichaaa',last_Name:'kashid'},
    {name:'shivraj',last_Name:'kashid'},
    {name:'jay',last_Name:'kashid'}
]
let persons=people.map(elements=>{
     return [elements.name ,elements.last_Name]
})
console.log(persons) 


const arr1=[1,2,3,4,5]
const res=arr1.reduce((accumulator,current)=>accumulator*current,1)
console.log(res)