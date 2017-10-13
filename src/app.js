//var bob = {
//    _name:"Bob",
//    _friends: ["Guilheme","Camila","Murilo"],
//    printFriends: function printFriends(){
//        var self = this;
//        this._friends.forEach(function(f) {
//            return console.log(self._name  + " knows " + f);
//        });
//    }
//}
//
//bob.printFriends();

//var color = () => console.log("red");
//color();
//
//
//
//var bob = {
//    _name:"Bob",
//    _friends: ["Guilheme","Camila","Murilo"],
//    printFriends: function printFriends(){
//        this._friends.forEach(f => console.log(this._name + " knows " + f));
//    }
//}
//
//bob.printFriends();

//class Color {
//    constructor(codeColor, nameColor) {
//        this.codeColor = codeColor;
//        this.nameColor = nameColor;
//    }
//
//    getColor() {
//        return {
//            codeColor : this.codeColor,
//            nameColor: this.nameColor
//        };
//    }
//}
//
//let red = new Color("red", "Red");
//console.log(red.getColor());

//STRING TEMPLATE
let name = "Felipe";
let age = 19;
//let text = "name: " + name + " age: " + age;
let text = `
    name: ${name},
    age: ${age}
`;
console.log(text);


//DEFAULT VALUES
//function test(valueA) {
//    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
//    return valueA + valueB;
//}

function test(valueA, valueB = 4) {
    return valueA + valueB;
}
console.log(test(12));
console.log(test(12, 2));


//LIST whith FOR OF
console.log("\n\nFOR OF\n");

var list = ["teste", 34, {name:"Felipe"}];

for(var i in list) {
    console.log(i);
    console.log(list[i]);
}

console.log("\nES6\n");
for(let i of list){
    console.log(i);
}


console.log("\n\nHerancas\n")

class People {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    toString() {
        return `Name: ${this.name}
        Email: ${this.email}
        Phone: ${this.phone}
        `;
    }
}

class Client extends People {
    constructor(id, name, email, phone){
        super(name, email, phone);
        this.id = id;
    };

    toString() {
        return `Id : ${this.id}
        ${super.toString()}
        `;
    }
}

let teste = new Client(12, "Felipe", "felipe@finhane.com", "123123123123");
console.log(teste.toString());


console.log("\n\n SET DATE STRUTURE\n\n");

let color = new Set();
color.add("red").add("green").add("blue");

if(color.size === 2 && color.has("red")) {
    for(let key of  color.values()){
        console.log(key);
    }
}


console.log('\n\nFORMAT NUMBER\n\n');

let number = 123456.34;
let en = new Intl.NumberFormat('en-US').format(number);
let de = new Intl.NumberFormat('de-DE').format(number);
let br = new Intl.NumberFormat('pt-BR').format(number);

console.log(en);
console.log(de);
console.log(br);



console.log('\n\nFORMAT MONEY\n\n');
let usd = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(number);
let brl = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(number);

console.log(usd);
console.log(brl);


console.log("\n\n FORMAT DATE \n\n");

let dateUS = new Intl.DateTimeFormat("en-US");
let dateBR = new Intl.DateTimeFormat("pt-BR");
let dateDE = new Intl.DateTimeFormat("de-DE");

console.log(dateUS.format(new Date("2017-05-04 00:00:00")));
console.log(dateBR.format(new Date("2017-05-04 00:00:00")));
console.log(dateDE.format(new Date("2017-05-04 00:00:00")));


console.log("\n\nString Seach\n\n");
console.log("hello".indexOf("ello") === 1);

console.log("hello".startsWith("ello",1));
console.log("hello".endsWith("hell",4));
console.log("hello".includes("he"));
console.log("hello".includes("he", 1));
