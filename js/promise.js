const Status = {
	PENDING:'pending',
	FULFILLED:'fulfilled',
	REJECTED:'rejected',
}


class MyPromise {
	constructor(executor) {
		this.status = Status.PENDING
		this.value = undefined
		this.reason = undefined
		this.resolveCallback = []
		this.rejectedCallback = []

		const resolve=(value)=>{
			if (this.status === Status.PENDING){
				this.status = Status.FULFILLED
				this.value = value
				this.resolveCallback.forEach((callback)=>{
					callback()
				})
			}
		}

		const reject=(reason)=>{
			if (this.status === Status.PENDING){
				this.status = Status.REJECTED
				this.reason = reason
				this.rejectedCallback.forEach((callback)=>{
					callback()
				})
			}
		}
		try {
			executor(resolve,reject)
		} catch (e) {
			reject(e)
		}
	}

	then(onFulfilled, onRejected){
		if (this.status === Status.FULFILLED){
			//同步
			onFulfilled(this.value)
		} else if (this.status === Status.REJECTED){
			//同步
			onRejected(this.reason)
		} else {
			//异步
			this.resolveCallback.push(()=>{
				onFulfilled(this.value)
			})
			this.rejectedCallback.push(()=>{
				onRejected(this.reason)
			})
		}
	}
}

const test = new MyPromise((resolve, reject) =>{
	// reject(new Error('error'))
	setTimeout(()=>{
		resolve('success')
	},1000)
})

test.then((value)=>{
	console.log(value)
},(e)=>{
	console.log(e)
})
