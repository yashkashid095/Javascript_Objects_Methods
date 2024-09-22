//for of loop is modern iteration statment introduced in ES6 that provides concise and easy way to iterate over elements in objects like arrays,string,maps,set and more
//it allows us to directly iterate over the values rather than thier keys and indices which makes the code more readable and less error-prone

//syntax for(variable of iterable){...}
// const person={
//     name:"yash",
//     age:22,
//     gender:"male"
// }

// for(values of person){
//     console.warn(values)
// }

const arr=['yash','anil','kashid']

for(values of arr){
    console.warn(values)
}

const name="yash Anil Kashid"
for(char of name){
    console.warn(char)
} 

 