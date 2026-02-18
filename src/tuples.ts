let myTuple:[number,string];//have only fixed length
myTuple=[10,"Anurag"]

let myTuple2:[string,number];
myTuple2=["anurag",23]

console.log(myTuple);
console.log(myTuple2);

type Response=[ number,string];
const goodRes:Response=[200,"Ok"];

goodRes.push(233);//i dont't know why its work.....its weird
console.log(goodRes);

///Enum
enum OrderStatus{
    PENDING=10,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const status=OrderStatus.DELIVERED

function isDelivered(status:OrderStatus){
    return status===OrderStatus.DELIVERED
}

console.log(isDelivered(12));


enum ArroyKeys{
    UP="Up",
    DOWN="DOWN",
    LEFT="LEFT",
    RIGHT="RIGHT",
    Error=2333


}


