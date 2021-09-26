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
