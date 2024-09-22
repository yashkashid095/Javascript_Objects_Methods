// for in loop isnused to iterate over a enumerable properties of an object.
//it is way to loop through the keys of object

// syntax for(let key in object){....}
const person={
    name:"yash",
    age:22,
    gender:"male"
}
for(key in person){
    console.warn(key,person[key])
}


//now lets  iterarte over array data we get acces to its index

const arr=['yash','anil','kashid']
for(index in arr)
{
    console.warn(index,arr[index])
}