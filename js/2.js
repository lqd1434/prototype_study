class Person{
	constructor(name,age) {
		this.name = name
		this.age = age
	}

	sayHello(){
		console.log(`我是${this.name},我今年${this.age}岁`,)
	}
}

Person.prototype.id = 1

class Student extends Person{
	sayHello() {
		console.log(`我是${this.name},我今年${this.age}岁`,'我是学生')
	}

	test(){
		console.log(super.id)
		//super调用的是父类的prototype
	}
}

console.log(Object.getPrototypeOf(Person))
console.log(Person.prototype)
console.log(Object.getPrototypeOf(Student));

console.log(typeof Person) //=> function
console.log(typeof Student) //=> function

const jack = new Person('jack',18)
const bob =new Student('jack',18)

console.log(jack)
console.log(bob)

bob.test()

console.log(Object.getPrototypeOf(Student));
console.log(Student.prototype)
console.log(Person.prototype)

