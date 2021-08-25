var hello = 'hello';
console.log(hello);
function add(a, b) {
    return a + b;
}
var hasValue = true;
// Typescriptでは整数も浮動小数点もマイナスもnumberで表すことができる
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
/*
型推論の場合

let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;

let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
*/
// any型
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0]; // -> fruit: string
// Tuple型 [決まった型の配列にしたい！！]
var book = ['business', 1500, false];
book[1] = 700; // -> OK!
// Enum型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    host: true,
    size: CoffeeSize.TALL
};
// Union型
var unionType = 10;
var unionTypes = [21, 'hello'];
