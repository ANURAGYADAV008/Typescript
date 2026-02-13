const activeUser:string[]=[];
activeUser.push("Anurag");
activeUser.push("jay");
console.log(activeUser);

const  ageList:number[]=[];
for(let i=0;i<6;i++)ageList.push(i)
    console.log(ageList);

let names:Array<string>=[];
names.push("Anurag");
names.push("Yadav")


type user={
    name:string,
    age:number
}

const student:user[]=[];
student.push({name:"jay",age:20});
console.log(student);

//Multidimentional
const board:string[][]=[["x","0","x"],["x","o","x"]]
console.log(board);
const ages:number[]=[];
const gameBoard:string[][]=[];
type product={
    name:string,
    price:number

}
const p:product[]=[];
const p1:product={
    name:"x",
    price:320
}
const p2:product={
    name:"x",
    price:320
}
const p3:product={
    name:"x",
    price:320
}
const p4:product={
    name:"x",
    price:320
}
p.push(p1,p2,p3,p4);

const ans=p.reduce((prev:number ,curr:product):number=>{
    return prev+curr.price

},0)

console.log("Total Product price Is ",ans);