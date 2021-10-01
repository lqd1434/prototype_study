function Person(name,age) {
	this.name = name
	this.age = age

	this.sayHello = function () {
		console.log(`我是${this.name},我今年${this.age}岁`,)
	}
}
Person.prototype = new Person()
console.log(Person.prototype)

const jack = new Person('jack',18)
jack.sayHello()
console.log(jack)

const bob = {name:'bob'}
Object.setPrototypeOf(bob,Person.prototype)
console.log(bob.toString())

for (const bobKey in bob) {
	console.log(bobKey)
}

