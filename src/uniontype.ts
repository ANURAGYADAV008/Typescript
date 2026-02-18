let age:number|string=21;
age=23;
age="23";
console.log(age);
type Point={
    x:number,
    y:number
}
type Loc={
    lat:number,
    long:number
}

let coordinate:Point|Loc={x:1,y:34};
coordinate={lat:2333.4,long:4666}
console.log(coordinate);

function printAge(age:number | string):void{
    console.log(`You are ${age} year Old`);
}

function calculatetax(price:number | string ,tax:number){
    if(typeof price==="string"){
        price=parseFloat(price.replace("$",""));

    }
     return price*tax
}
console.log(calculatetax(34,60));
console.log(calculatetax("50",60));


//array Type Union

const nums:number[]=[1,2,3,4,5,6];
const stuff:any[]=[1,"2","Anurag",false];//can be any Type
console.log(stuff);
const num2:(number | string)[]=[1,"anurag","aloo"]//both type 
console.log(num2);

//Literal type

let zero:0=0;
let hi:"hi"="hi";
const giveAnser=(answer:"yes"|"no"|"maybe")=>{
    return `The Answer is ${answer}`;
}
console.log(giveAnser('no'));
type days="monday"|"tuesday";
const newdays:days="monday";
console.log(newdays);

//Excercise

const highscore:number|boolean=false;

const stuff3:number[]|string []=["1","2","3"];//either number or string
type skilllevel="Begginer"|"Intermediate"|"Advance"|"Expert"

type skiBoard={
    name:string,
    age:number,
    soort:"ski"|"snowBoard";
    level:"skillLevel"
}
type rgb={
    r:number,
    g:number,
    b:number
}
type Hsl={
    h:number;
    s:number,
    l:number
}
const color:(rgb | Hsl)[]=[{h:1,s:2,l:3}]