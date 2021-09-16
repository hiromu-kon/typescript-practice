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
