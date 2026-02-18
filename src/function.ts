function square(num: number){
    return num*num;
}
//console.log(square("anurag"));
console.log(square(3));

function greet(name:string){
    return name;
}
console.log(greet("Anurag Yadav"));

//
const dosomething=(person:string,age:number,isFunny:boolean)=>{
    return{
        name:person,
        age:age,
        isFunny:isFunny
    }
}

console.log(dosomething("Anurag Yadav",20,false));

//defult value function

function add(num:number=10 ):number{
    return num;
}
console.log(add(50));

const rando = (num: number): string | number => {
    if(Math.random()>.5){
        console.log(num.toString())
        return num.toString();
    }
    return num;
}
console.log(rando(.2));

const colors=["blue","black","green"];
const newColor=colors.map(color=>{
    return color.toLocaleUpperCase();
})
console.log(colors);
console.log(newColor);

//Void Type function 

function printTwice(msg:string):void{
    console.log(msg);
    console.log(msg);
    //return msg//got eroor
}
printTwice("Anurag");

//never
function makeError(msg:string):never{
    throw new Error("Never Throw");

}
//