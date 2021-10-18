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

		const resolve=(value)=>{
			if (this.status === Status.PENDING){
				this.status = Status.FULFILLED
				this.value = value
			}
		}

		const reject=(reason)=>{
			if (this.status === Status.PENDING){
				this.status = Status.REJECTED
				this.reason = reason
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
			onFulfilled(this.value)
		}
		if (this.status === Status.REJECTED){
			onRejected(this.reason)
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
