// Symbol is unique and immutable primitive data type introduced in EcmaScript 6 .A symbol is often used as identifier for object properties to avoid potential naming conflicts

//it is unlike strings or number , symbol are guaranteed to be unique. When you create a symbol,it is unique and can not be created or changed .This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation
const mySymbol=Symbol("YAsh")
console.log(mySymbol)
