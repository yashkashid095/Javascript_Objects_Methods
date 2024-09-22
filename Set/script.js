// set is a built in data structure introduced in es6 that represnts a collection of unique values .unlike arrays,Set allows you to store only unique values ,which means duplicate values are automatically removed .each value can occur only once within set
// set objects are useful when you need to store a list of unique elements and quickly check for the existance of specific value

const intialValues=[1,2,3,4,5]

const mySet=new Set(intialValues)
console.log(mySet)
mySet.add("apple")
mySet.add("bannaa")
console.log(mySet)
console.log(mySet.has("apple"))
mySet.delete("bannaa")
console.log(mySet)
mySet.clear()
console.log(mySet)