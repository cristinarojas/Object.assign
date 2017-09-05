let target = {
 	c: -1
}

console.log(Object.assign(target, {a:1, b: 2}, {c: 5})); // {c: 5, a:1, b: 2 }