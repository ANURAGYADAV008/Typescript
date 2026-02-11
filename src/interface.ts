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



