interface Human {
	readonly name: string;
	age:  number;
	greeting(message: string): void;
}

const human: Human = {
	name: 'Quill',
	age:  38,
	greeting(message: string) {
		console.log(message);
	}
}

class Developer implements Human {
	constructor(public name: string, public age: number, public experience: number) {}
	greeting(message: string) {
		console.log('Hello!');
	}
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}

const user: Human = tmpDeveloper;
let developer = new Developer('Quill', 39, 3);
developer.name = 'John';

type Nameable = {
	name: string;
}

interface Human extends Nameable {
	age: number;
	greeting(message: string): void;
}

// typeエイリアスの場合
type addFunc = (num1: number, num2: number) => number;

// interfaceの場合
// オブジェクトと混同しやすいため基本的にはtypeを使う
interface addFunc {
	(num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2:number) => {
	return n1 + n2;
}

type Nameable = {
	name: string;
	nickName?: string;
}

const nameable: Nameable = {
	name: 'Quill',
	nickName: 'Quilla'
}

// メソッドにもつけることができる
interface Human extends Nameable {
	age: number;
	greeting?(message: string): void;
}

class Developer implements Human {
	constructor(public name: string, public age: number) {}
}
