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


// 決して何も返さない
// neverを消して型推論にするとvoidになる
function error(message: string): never {
	throw new Error(message);
}

console.log(error('This is an error'))
