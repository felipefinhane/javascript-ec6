"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var name = "Felipe";
var age = 19;
//let text = "name: " + name + " age: " + age;
var text = "\n    name: " + name + ",\n    age: " + age + "\n";
console.log(text);

//DEFAULT VALUES
//function test(valueA) {
//    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
//    return valueA + valueB;
//}

function test(valueA) {
    var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    return valueA + valueB;
}
console.log(test(12));
console.log(test(12, 2));

//LIST whith FOR OF
console.log("\n\nFOR OF\n");

var list = ["teste", 34, { name: "Felipe" }];

for (var i in list) {
    console.log(i);
    console.log(list[i]);
}

console.log("\nES6\n");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i = _step.value;

        console.log(_i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log("\n\nHerancas\n");

var People = function () {
    function People(name, email, phone) {
        _classCallCheck(this, People);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(People, [{
        key: "toString",
        value: function toString() {
            return "Name: " + this.name + "\n        Email: " + this.email + "\n        Phone: " + this.phone + "\n        ";
        }
    }]);

    return People;
}();

var Client = function (_People) {
    _inherits(Client, _People);

    function Client(id, name, email, phone) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

        _this.id = id;
        return _this;
    }

    _createClass(Client, [{
        key: "toString",
        value: function toString() {
            return "Id : " + this.id + "\n        " + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this) + "\n        ";
        }
    }]);

    return Client;
}(People);

var teste = new Client(12, "Felipe", "felipe@finhane.com", "123123123123");
console.log(teste.toString());

console.log("\n\n SET DATE STRUTURE\n\n");

var color = new Set();
color.add("red").add("green").add("blue");

if (color.size === 2 && color.has("red")) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = color.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            console.log(key);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

console.log('\n\nFORMAT NUMBER\n\n');

var number = 123456.34;
var en = new Intl.NumberFormat('en-US').format(number);
var de = new Intl.NumberFormat('de-DE').format(number);
var br = new Intl.NumberFormat('pt-BR').format(number);

console.log(en);
console.log(de);
console.log(br);

console.log('\n\nFORMAT MONEY\n\n');
var usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(number);
var brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(number);

console.log(usd);
console.log(brl);

console.log("\n\n FORMAT DATE \n\n");

var dateUS = new Intl.DateTimeFormat("en-US");
var dateBR = new Intl.DateTimeFormat("pt-BR");
var dateDE = new Intl.DateTimeFormat("de-DE");

console.log(dateUS.format(new Date("2017-05-04 00:00:00")));
console.log(dateBR.format(new Date("2017-05-04 00:00:00")));
console.log(dateDE.format(new Date("2017-05-04 00:00:00")));

console.log("\n\nString Seach\n\n");
console.log("hello".indexOf("ello") === 1);

console.log("hello".startsWith("ello", 1));
console.log("hello".endsWith("hell", 4));
console.log("hello".includes("he"));
console.log("hello".includes("he", 1));
