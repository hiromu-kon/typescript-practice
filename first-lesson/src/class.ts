class Person {
	constructor(public readonly name: string, private readonly age: number) {
	}
}

class Teacher extends Person {
	private static instance: Teacher;


	private constructor(name: string, age: number, public subject: string) {
		super(name, age);
	}

	static getInstance() {
		if (Teacher.instance) return Teacher.instance
		Teacher.instance = new Teacher('Quill', 38, 'Math')
		return Teacher.instance;
	}
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();

// 同じインスタンスになる
console.log(teacher, teacher2)
