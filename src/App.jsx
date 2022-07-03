import { useEffect, useState } from 'react'

const App = () => {
	const [count, setCount] = useState(0)
	const [step, setStep] = useState(1)

	console.log('Render Antes de useEffect')

	useEffect(() => {
		document.title = count
		console.log('useEffect')
	}, [count])

	console.log('Render después de useEfect')

	return (
		<div>
			<h1>{count}</h1>
			<h2>{step}</h2>
			<button onClick={() => setCount(count + step)}>+{step}</button>
			<button onClick={() => setStep(step + 1)}>Incrementar step</button>
		</div>
	)
}

export default App
