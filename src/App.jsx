import UsersList from './components/UsersList'

const USERS = [
	{
		username: 'rosen',
		name: 'Rosendo',
		active: true,
		role: 'teacher'
	},
	{
		username: 'diloes',
		name: 'Diego López',
		active: true,
		role: 'student'
	},
	{
		username: 'el_fulgen',
		name: 'Fulgencio Suarez',
		active: false,
		role: 'student'
	}
]

const App = () => <UsersList initialUsers={USERS} />

export default App
