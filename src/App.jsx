import UsersList from './components/UsersList'

const USERS = [
	{
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Diego López',
		active: true,
		role: 'student'
	},
	{
		name: 'Rocío Ortiz',
		active: false,
		role: 'student'
	}
]

const App = () => (
	<UsersList users={USERS}>
		<h1>Listado de Usuarios</h1>
	</UsersList>
)

export default App