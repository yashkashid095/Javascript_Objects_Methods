const music=[
    {song:"yash",duration:2},
    {song:"jay",duration:1},
    {song:"abhi",duration:1},
    {song:"ravi",duration:2}

]

const longMusic=music.filter(elements=>elements.duration>1)
console.log(longMusic)
const number=[1,2,3,4,5,6,7]
const num=number.filter(number=>number>5)
console.log(num)
const names=music.filter(elements=>elements.song.length>3)
console.info(names)