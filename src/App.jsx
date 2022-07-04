import UsersList from './components/UsersList'

const USERS = [
	{
		id: 0,
		name: 'Rosendo',
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
		name: 'Fulgencio Suarez',
		active: false,
		role: 'student'
	}
]

const App = () => <UsersList initialUsers={USERS} />

export default App
