const obj = {
	a:10,
	a:12,
	getDoubleA(){
		return this.a*2
	}
}
const timer = setTimeout((x)=>{
	console.log(x,'x')},1000,[10,5])
console.log(timer)
console.log(obj)
let b =new Number(3)
console.log(obj.getDoubleA())
console.log(3 == b)

class X{
	c = 9
	static getC(){
		this.c =10
		return this.c
}
}

console.log(X.getC())
