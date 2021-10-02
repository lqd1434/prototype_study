var Util = {}

Util.extend = function extend() {
	var target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			options, name, src, copy, clone

	if (length === 1) {
		target = this
		i = 0
	}

	for (; i < length; i++) {
		options = arguments[i]
		if (!options) continue

		for (name in options) {
			src = target[name]
			copy = options[name]

			if (target === copy) continue
			if (copy === undefined) continue

			target[name] = copy

			// if (Util.isArray(copy) || Util.isObject(copy)) {
			// 	if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : []
			// 	if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {}
			//
			// 	target[name] = Util.extend(clone, copy)
			// } else {
			// 	target[name] = copy
			// }
		}
	}

	return target
}

function Teacher() {
	const say = ()=>{
		console.log('hello')
	}
}

Teacher.prototype.sleep = ()=>{
	console.log('sleep')
}
Teacher.prototype.age = 20


Util.extend(Teacher.prototype,{name:'jack',sleep:function (){
	console.log('sleep2')}})

console.log(Teacher.prototype)
