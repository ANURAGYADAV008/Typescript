

type Input=string|number
function getValue(arr:Input[]){
    return arr[0];
}

const value=getValue(["Anurag","Yadav"]);
console.log(value);
//console.log(value.toUppercase());


function identity1<T>(arg:T){
    return arg;
}
let ans1=identity1<string>("Anurag Yadav")
console.log(ans1.toUpperCase());

let ans2=identity1<number>(20)
console.log(ans2);

///get first element of array

function getfirstvalue<T>(arg:T[]){
    return arg[2];
}
console.log(getfirstvalue(["Anurag Yadav","Jay Singh Yadav"]));
console.log(getfirstvalue([10,20,50]));

// function doThings (things:number|string):number|string{
//     return things
// }

//genertic way 

function numberIdentity(item:number):number{
    return item;
}
function stringIdentity(item:string):string{
    return item
}


function identity<T>(item:T):T{
    return item
}
const ans=identity<string>("ANURAG");
console.log(ans);
console.log(identity<number>(20));

//other generic function

function getRandomElement<T>(list:T[]){
    return list

}
console.log(getRandomElement<string>(["apple","orange","grapes"]));
console.log(getRandomElement<number>([1,2,3,4,5]));
///More then one type
function merge<T extends object,U extends object>(obj1:T,obj2:U){
    return {
        ...obj1,
        ...obj2
    }
}

const p=merge({name:"anurag",age:23},{isAlive:true,missing:false})//we don't write to Type its Automatically can be infer
console.log(p);

const a=merge({name:"anuragyadav"},{age:12,name:"Jay"});
console.log(a);

//Arrow function 
const GetRandomElement=<T,>(list:T[]):T | undefined=>{
    console.log(list)
    return list[0];
}
const Ans=GetRandomElement<number>([10,20,30,40])
const o=GetRandomElement<string>(["anurag","jay"]);
console.log(Ans)
console.log(o);


//
function makeEmptyArray<T=number>():T[]{
    return []
}


//Generic classes
interface Song {
    title:string,
    artist:string;
}
interface Video{
    title:string,
    creater:string,
    resolution:string
}

class Playlist<T>{
    public queue:T[]=[];
    add(ele:T){
        this.queue.push(ele);
    }
}

const songs=new Playlist<Song>()
const videos=new Playlist<Video>()
videos.add({title:"Sanam Teri kasam",creater:"Anurag",resolution:"1080p"})