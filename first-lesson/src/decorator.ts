function Logging(constructor: Function) {
	console.log('Logging...');
	console.log(constructor);
}

@Logging
class User {
	name = 'Quill';
	constructor() {
		console.log('User was created!');
	}
}

function Log(constructor: Function) {
	console.log('Logging...');
	console.log(constructor);
}
