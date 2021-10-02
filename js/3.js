class Single{
	constructor(name){
		this.name=name
		this.instance=null
	}
	static getInstance(name){
		if(!this.instance){
			this.instance=new Single(name)
		}
		return this.instance
	}
}

console.log(XMLHttpRequest.prototype)
console.log(Single.getInstance('zme'))
const d=Single.getInstance('LB')
console.log(d)
