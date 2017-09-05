let object1 = {
	a:4,
	b:2,
 	c:3
}

let object2 = {
	a: -3
}

console.log(Object.assign({}, object1, object2)); // {a: -3, b: 2, c: 3}