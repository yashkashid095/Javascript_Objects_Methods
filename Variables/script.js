function varKeyword()
{
    var a='yash';
    if(a==='yash')
    {
        var a='jay' //same variable
        console.log(a)
    }
   console.log(a)
}
varKeyword()
//when we declare any variable using var keyword it is function scoped we can use it before they are declared because variable decalred using var keyword are hoisted to the top 
function letKeyword()
{
    let a=10
    if(a===10)
    {
      let a=20;
        console.log(a);
    }
    console.log(a)
}
letKeyword()



// global variable
function test() {
  var y = 30; // no var, let, or const
  }
  test();
  console.log(y); // 30 (y becomes a global variable!)
  