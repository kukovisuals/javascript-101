const mainFunction = () => {
  const gainers = result => {
		const names = result.map(data => {
			const y = data.name
			const obj = {
				name:y
			}
			return obj
		})

    console.log(names)
  }

  asynchronousFunction(gainers)
}

const asynchronousFunction = callback => {
	const url = 'https://jsonplaceholder.typicode.com/users'
  return fetch(url).then(response => response.json())
  	.then(response => {
    	callback(response)
  })
}

const callbackFunction = result => {
	console.log(result)
}

mainFunction(callbackFunction)