function Person() {
	console.log('我是',this.name)
}

Person.prototype.id = 1
Object.defineProperty(Person.prototype,'num',{value:'100',writable:true,enumerable:false})
console.log(Person.prototype)
const jack = new Person()
const bob = {name:'bob'}
Object.setPrototypeOf(bob,Person.prototype)
for (const bobKey in bob) {
	console.log(bobKey)
}
console.log(Object.getPrototypeOf(jack) === Person.prototype)
