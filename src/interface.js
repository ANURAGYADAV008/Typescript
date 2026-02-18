var islegal = function (user) {
    if (user.age > 18)
        return true;
    else
        return false;
};
var greet = function (user) {
    console.log("Hello " + user.firstName + user.lastName);
};
console.log(islegal({
    firstName: "Anurag",
    lastName: "Yadav",
    age: 23
}));
greet({
    firstName: "Anurag",
    lastName: "Yadav",
    age: 23
});
var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    Employee.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Employee;
}());
var e = new Employee("Anurag", 23);
console.log(e);
var pt = { x: 123, y: 1234 };
var anurag = { first: "anurag", lastname: "Yadav", sayHai: function (anurag) {
        return "Hello to ".concat(name);
    } };
console.log(anurag);
var shoes = {
    name: "Blue shoes",
    price: 120000,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        return newPrice;
    }
};
console.log(shoes, shoes.applyDiscount(.4));
var elton = {
    name: "Elton",
    age: 1,
    breed: "Australian shepherd",
    bark: function () {
        return "WOOF WOOF !";
    }
};
console.log(elton);
var chewy = {
    name: "Chewy",
    age: 3.5,
    breed: "LabraDore",
    bark: function () {
        return "Bark !!";
    },
    job: "drug sniffer"
};
console.log(chewy);
var jay = {
    first: "Jay",
    lastname: "singh",
    nickname: "Yadav",
    sayHai: function (name) {
        return name;
    },
    name: "Jay Singh",
    age: 20,
    greet: function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    },
    id: 22333,
    email: "jay@example.com",
    level: "Junior",
    languages: ["TypeScript", "JavaScript"]
};
console.log(jay);
