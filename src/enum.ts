type keyinput='Up'|'Down'|'Left'|'Right';

function doSomething(keyPressed:keyinput){
    console.log("Move "+ " "+keyPressed);

}
doSomething("Up");
doSomething("Down");

enum direction{
    up,
    Down,
    Left,
    Right
}

const doSomething2=(keyPressed:direction2)=>{
    console.log("Move" + keyPressed);

}
// doSomething2(direction.up)
// doSomething2(direction.Left);

enum direction2{
    up=1,
    Down=2,
    Left=3,
    Right=4,
}

doSomething2(direction2.up)
doSomething2(direction2.Right)