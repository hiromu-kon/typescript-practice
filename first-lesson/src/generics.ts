function copy<T>(value: T): T {
	return value;
}

console.log(copy<string>('hello'));

// オブジェクトになると見づらくなるが型を消すと推論してくれる
console.log(copy<{ name: string}>({ name: 'Quill' }));

console.log(copy({ name: 'Quill' }));
