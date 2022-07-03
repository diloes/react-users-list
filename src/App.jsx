import { useEffect, useState } from 'react'

const getInitialValue = () =>
	new Promise(resolve => {
		setTimeout(() => resolve(5), 2000)
	})

const setInitialValue = async setCount => {
	const initialValue = await getInitialValue()
	setCount(initialValue)
}

const App = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		setInitialValue(setCount)
	}, [])

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Incrementar</button>
		</div>
	)
}

export default App
