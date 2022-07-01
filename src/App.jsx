import UsersList from './components/UsersList'

const USERS = [
	{
		id: 0,
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		id: 1,
		name: 'Diego López',
		active: true,
		role: 'student'
	},
	{
		id: 2,
		name: 'Rocío Ortiz',
		active: false,
		role: 'student'
	}
]

const App = () => <UsersList initialUsers={USERS} />

export default App
