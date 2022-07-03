import { useEffect, useState } from 'react'

const App = () => {
	const [count, setCount] = useState(0)
	const [play, setPlay] = useState(true)

	console.log('Render Antes de useEffect')

	useEffect(() => {
		if (!play) return

		const intervalId = setInterval(() => {
			setCount(prevCount => prevCount - 1)
		}, 1000)

		return () => clearInterval(intervalId)
	}, [play])

	console.log('Render después de useEfect')

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setPlay(!play)}>{play ? 'Pausar' : 'Continuar'}</button>
		</div>
	)
}

export default App
