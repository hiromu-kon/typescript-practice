type Engineer = {
	name: string;
	role: string;
}

type Blogger = {
	name: string;
	follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
	name: '',
	role: 'front-end',
	follower: 1000
}

/* interfaceの場合 */

interface Engineer {
	name: string;
	role: string;
}

interface Blogger {
	name: string;
	follower: number;
}

interface EngineerBlogger extends Engineer, Blogger { }


/* union型で使用 */

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber   // -> type Mix = number

/* パターン① */
function toUpperCase(x: string | number) {
	if (typeof x === 'string') {
		return x.toUpperCase();    // 条件文を使わないとtoUpperCaseは使えずstringとnumberで使えるメソッドしか使えない
	}
	return '';
}

/* パターン② */
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
	console.log(nomadWorker.name);  　　　// 上記の通りnameしか使えない

	/* if (typeof nomadWorker === 'object') typeofだとnomadWorkerがオブジェクトのためobjectしか使えない */

	if ('role' in nomadWorker) {
		console.log(nomadWorker.role);
	}
}


/* パターン③ */
class Dog {
	speak() {
		console.log('bow-wow');
	}
}

class Bird {
	speak() {
		console.log('tweet-tweet');
	}
	fly() {
		console.log('flutter');
	}
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
	pet.speak();

	if (pet instanceof Bird) {
		pet.fly();
	}
}

havePet(new Bird());
havePet(new Dog());

class Dog {
	kind: 'dog' = 'dog'
	speak() {
		console.log('bow-wow');
	}
}

class Bird {
	kind: 'bird' = 'bird'
	speak() {
		console.log('tweet-tweet');
	}
	fly() {
		console.log('flutter');
	}
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
	pet.speak();
	switch (pet.kind) {
		case 'bird':
			pet.fly();
	}
}

const input = document.getElementById('input');  // const input: HTMLElement | null

input.value  // HTMLElementだとvalueが使えないためエラーになる


// 下二つは同じものになるがJSXなどを使用している場合、タグとの区別が難しくなるためasの方を使う
const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement;

const input = document.getElementById('input');  
// const input: HTMLElement | null

const input = document.getElementById('input')!;  
// const input: HTMLElement


// 通常の場合
interface Designer {
	name: string;
}

const designer: Designer = {
	name: 'Quill'
}

// designer.role = 'web'; 通常はメンバを追加することはできない


/* インデックスシグネチャの場合
   インデスクシグネチャを使用する場合はインデックスシグネチャの型に合わせないとエラーになる */

interface Designer {
	name: string;           // インデックスシグネチャを使用している場合、「age: number」などにすることはできない
	[index: string]: string;
}

const designer: Designer = {
	name: 'Quill',
	role: 'web'
}


function toUpperCase(x: string): string;
// function toUpperCase(x: number): number;  オーバーロードは複数作ることができる

function toUpperCase(x: string | number): {
	if (typeof x === 'string') {
		return x.toUpperCase();
	}
	return x;
}

const upperHello = toUpperCase('hello');
