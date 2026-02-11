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
