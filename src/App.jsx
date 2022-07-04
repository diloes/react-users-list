import UsersList from './components/UsersList'

const USERS = [
	{
		username: 0,
		name: 'Rosendo',
		active: true,
		role: 'teacher'
	},
	{
		username: 1,
		name: 'Diego López',
		active: true,
		role: 'student'
	},
	{
		username: 2,
		name: 'Fulgencio Suarez',
		active: false,
		role: 'student'
	}
]

const App = () => <UsersList initialUsers={USERS} />

export default App
