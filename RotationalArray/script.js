const a=new Array()
a.push(1,2,3,4,5,6)
console.log(a)
let numberOfRotation=3
for(let i=1;i<=3;i++)
{
    let last=a[0]
    for(let j=0;j<a.length;j++)
    {
        a[j]=a[j+1]

    }
    a[a.length-1]=last
}

console.log(`roated array is:${a}`) 