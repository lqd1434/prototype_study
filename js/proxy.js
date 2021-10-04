const target = {
	a:1,
	b:'hello',
	c:function (){
		console.log('i am c')
	}
}

const handler = {
	/**
	 *
	 * @param targetObj 第一个参数是目标对象
	 * @param key 第二个是要获取的属性名
	 * @param proxy 第三个是代理对象
	 */
	get(targetObj, key,proxy){
		return targetObj[key]+'handle'
		// console.log(targetObj, key,proxy,'get')
	},
	/**
	 * @param targetObj 第一个参数是目标对象
	 * @param key 第二个是要获取的属性名
	 * @param value 第二个是要获取的属性名
	 * @param proxy 第三个是代理对象
	 */
	set(targetObj,key,value,proxy){
		console.log(value,'set')
		targetObj[key] = value
		// return value
	}
}

const proxy = new Proxy(target,handler)

console.log(proxy.a)
proxy.a = 3
console.log(target.a)
console.log(proxy.a)
