let hello: string = 'hello';
console.log(hello);

function add(a: number, b: number): number {
  return a + b;
}

let hasValue: boolean = true;

// Typescriptでは整数も浮動小数点もマイナスもnumberで表すことができる
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;



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
const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];   // -> fruit: string


// Tuple型 [決まった型の配列にしたい！！]
const book: [string, number, boolean] = ['business', 1500, false];

book[1] = 700  // -> OK!


// Enum型
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
 
const coffee = {
  host: true,
  size: CoffeeSize.TALL
}

 // Union型
let unionType: number | string = 10
let unionTypes: (number | string)[] = [21, 'hello']

const apple: 'apple' = 'apple'  //-> appleしか入れられなくなる

const num: 0 = 0


// Union型と一緒に使うと便利
let clothSize: 'small' | 'medium' | 'large' = 'large';

const cloth = {
	color: 'white',
  size: clothSize   //-> sizeもlargeになる
}


// 何も返さない
function sayHello(): void {
	console.log('Hello')
}

console.log(sayHello());   //-> undefined


let unknownInput: unknown;
let anyInput: any;
let text: string;

// any: どんなものでも入れてて何にでも代入できる
anyInput = 'hello';
anyInput = 21;
anyInput = true;

text = anyInput; // OK!

// unknown: 入れることはできるが使うときは注意する
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;


if (typeof unknownInput === 'string') {
	text = unknownInput
}

// 決して何も返さない
// neverを消して型推論にするとvoidになる
function error(message: string): never {
	throw new Error(message);
}

console.log(error('This is an error'))


const anotherAdd1 = add;  //-> const anotherAdd: (num1: number, num2: number) => number
const anotherAdd2: (n1: number, n2: number) => number = add; // 明示的に型を宣言
const anotherAdd3: (n1: number, n2: number) => number = function (num1: number, num2: number) :number {  // 無名関数にする
	return num1 + num2
};


const doubleNumber1 = (num: number): number => num * 2;; // アロー関数
const doubleNumber2: (num: number) => number = num => num * 2;   // 左につける場合

function doubleAndHandle(num: number, cb: (num: number) => number): void {
	const doubleNum = cb(num * 2);
}

doubleAndHandle(21, doubleNum => {
	return doubleNum
});


class Person {
	name: string;   // nameフィールド
	constructor(initName: string) {
		this.name = initName;
	}

	greeting() {
		console.log(`Hello! My name is ${this.name}`);
	}
}

const quill = new Person('Quill');

quill.greeting();
