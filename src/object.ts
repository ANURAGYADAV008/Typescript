const dog={
    name:"sultan",
    breed:"Australian Sephard",
    age:3
}
function printName(person:{first:string,last:string}):void{
    console.log(` singer is ${person.first} ${person.last}`)
}

printName({first:"Anurag",last:'Yadav'})

let coor:{x:number,y:number}={x:10,y:25};

function randomCoordinate():{x:number,y:number}{
    return{
        x:Math.random()*10,
        y:Math.random()*10,
    }
}
const ans=randomCoordinate();
console.log(ans);

//printName({first:"jay",last:"singh",age:})//shows error

//but for This Npo error beacuse the PrintName Function Check only fisrt and last Property
const singer={first:"Anurag",last:"Yadav",age:20,isAlive:true};
printName(singer)

//type Alis
type person={
    name:string,
    age:number,
    isAlive:boolean,
    Address:string
}

const sayMybirtshday=(person:person):void=>{
    console.log(`Hey ${person.name},congrats on turning ${person.age}`)

}
sayMybirtshday({name:"Anurag",age:20,isAlive:true,Address:"Sultanpur"})

//Nested object

const describePerson=(person:{
    name:string,
    age:number,
    parentName:{
        mom:string,
        dad:string
    }

})=>{
    return `Person:${person.name},
    Age:${person.age}, Parents:{${person.parentName.mom},${person.parentName.dad}}`
}
const family=describePerson({name:"Anurag Yadav",age:20,parentName:{mom:"chandra Rekha",dad:"Deen Dayal yadav"}})
console.log(family);
type song={
    title:string,
    artist:string,
    nustreams:number,
    credits:{
        producer:string,
        writer:string
    }
}
function calculatepayout(song:song):number{
  return song.nustreams*0.333
}
const earn=calculatepayout({title:"song",artist:"Arjit singh",nustreams:200000,credits:{producer:"Bacchan",writer:"Arjit singh"}})
console.log(earn);

const mysong:song={
    title:"Unchained Melody",
    artist:'Righteous Brothers',
    nustreams:12873321,
    credits:{
        producer:"Phil spector",
        writer:"Alex North",
    }
}
const earn2=calculatepayout(mysong);
console.log(earn2);

type Point={
    x:number,
    y:number;
    z?:number;//mark as optional

}

const myPoint:Point={
    x:20,
    y:30

}
console.log(myPoint);
type user={
    readonly id:number,
    username:string,
}
const myuser:user={
    id:12345,
    username:"catGurl",
}
console.log(myuser.id);

//myuser.id=22556;//cannot assign because it is read only

//Intersection TYPE

type circle={
    radius:number

}

type colourful={
    color:string
}

type colourfulCircle=circle & colourful

const happyFace:colourfulCircle={
    radius:4,
    color:"Yellow"
}

console.log(happyFace);

type Movie={
    readonly title:string,
    originalTitle?:string,
    director:string,
    releaseYear:number,
    boxoffice:{
        budget:number,
        grossUs:number,
        grossWorldWide:number
    },
}

const dune:Movie={
    title:"Dune",
    originalTitle:"Dune Part one",
    director:"denis william",
    releaseYear:2021,
    boxoffice:{
        budget:1650000,
        grossUs:187687388,
        grossWorldWide:13556690,
    }

}
const Tenet:Movie={
    title:"Tenet",
    director:"denis william",
    releaseYear:2019,
    boxoffice:{
        budget:1650000,
        grossUs:187687388,
        grossWorldWide:135566909900,
    }

}
const getProfit=(movie1:Movie,movie2:Movie):number=>{
  return movie1.boxoffice.grossWorldWide-movie1.boxoffice.budget
}
console.log(getProfit(dune,Tenet));

