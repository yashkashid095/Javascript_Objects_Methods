console.log("we are going to learn objects in detail about what all things we can do with the js object and all operations performed on it")
const start=()=>{
    console.log("hii Donkeys.....")
}
const obj={
    1:"yash",
    2:"anil",
    start
}

obj['3']='kashid'

 obj[4]='dancing'

obj.start=()=>{console.log("helllooooooooooooo")}
 //if u want to delete any method dont put parenthesis therein()
console.log(obj["4"])
delete obj.start
console.log(obj)
start();


// another way to create an objet

let car=Object()
console.log(car)
car.make=2015
car.name="suzuki"
car.place='pune'
console.warn(car["make"])



//we can not crete an object using arrow constructor function
function Person(name,place,salary){
   
            this.name=name
            this.place=place
            this.salary=salary
            this.start=()=>
            {
                console.log(`${this.name} has started working`)
            }
}

let p=new Person("yash","akluj",100000000)
console.log(p)
Object.assign(p,car,obj)
console.log(p)