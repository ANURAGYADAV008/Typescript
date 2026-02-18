interface User{
    firstName:string,
    lastName:string,
    age:number
}

const islegal=(user:User)=>{

    if(user.age>18)return true;
    else return false;

}


const greet=(user:User)=>{
    console.log("Hello " + user.firstName + user.lastName)
}
console.log(
    islegal({
    firstName:"Anurag",
    lastName:"Yadav",
    age:23
})
)
greet({
    firstName:"Anurag",
    lastName:"Yadav",
    age:23

})

interface Person{
    name:string,
    age:number,
    greet(phrase:string):void;
}

class Employee implements Person{
    name:string;
    age:number;
    

    constructor (n:string,a:number){
        this.name=n;
        this.age=a;
    }
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}

const e=new Employee("Anurag",23);
console.log(e)

interface Point{
    x:number,
    y:number
}
const pt:Point={x:123,y:1234};
interface Person2{
    first:string,
    lastname:string,
    nickname?:string
    sayHai:(name:string)=>string
}
const anurag:Person2={first:"anurag",lastname:"Yadav",sayHai:(anurag)=>{
    return `Hello to ${name}`
}}
console.log(anurag);

interface Product{
    name:string,
    price:number,
    applyDiscount(discount:number):number;
}

const shoes:Product={
    name:"Blue shoes",
    price:120000,
    applyDiscount(amount:number):number{
        const newPrice= this.price*(1-amount);
        return newPrice
    }
}
console.log(shoes,shoes.applyDiscount(.4));


//Interface Reopen
interface Dog{
    name:string,
    age:number
}
interface Dog{
    breed:string;
    bark():string
}

const elton:Dog={
    name:"Elton",
    age:1,
    breed:"Australian shepherd",
    bark(){
        return "WOOF WOOF !";
    }
}
console.log(elton);


//Extending Iterface -> adding new Property In existing property

interface ServiceDog extends Dog{
    job:"drug sniffer"|"bomb0"|"guide Dog"

    }
const chewy:ServiceDog={
    name:"Chewy",
    age:3.5,
    breed:"LabraDore",
    bark(){
        return "Bark !!"
    },
    job:"drug sniffer"
}
console.log(chewy)

interface Employee{
    readonly id:number,
    email:string
}
interface Engineer extends Person2,Employee{
    level:string,
    languages:string[]
}
const jay:Engineer={
    first:"Jay",
    lastname:"singh",
    nickname:"Yadav",
    sayHai(name:string):string{
        return name
    },
    name:"Jay Singh",
    age:20,
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    },
    id:22333,
    email:"jay@example.com",
    level:"Junior",
    languages:["TypeScript","JavaScript"]
}
console.log(jay);