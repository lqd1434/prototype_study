class Person{
	constructor(name,age) {
		this.name = name
		this.age = age
	}

	sayHello(){
		console.log(`我是${this.name},我今年${this.age}岁`,)
	}
}

const jack = new Person('jack',18)
console.log(jack)
console.log(Object.getPrototypeOf(jack) === Person.prototype)
