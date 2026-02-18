function getValue(arr) {
    return arr[0];
}
var value = getValue(["Anurag", "Yadav"]);
console.log(value);
//console.log(value.toUppercase());
function identity1(arg) {
    return arg;
}
var ans1 = identity1("Anurag Yadav");
console.log(ans1.toUpperCase());
var ans2 = identity1(20);
console.log(ans2);
///get first element of array
function getfirstvalue(arg) {
    return arg[2];
}
console.log(getfirstvalue(["Anurag Yadav", "Jay Singh Yadav"]));
console.log(getfirstvalue([10, 20, 50]));
// function doThings (things:number|string):number|string{
//     return things
// }
//genertic way 
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
var ans = identity("ANURAG");
console.log(ans);
