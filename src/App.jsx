import UsersList from './components/UsersList'
import { USERS_ROLES } from './constants/userRoles'

const USERS = [
	{
		username: 'rosen',
		name: 'Rosendo',
		active: true,
		role: USERS_ROLES.TEACHER
	},
	{
		username: 'diloes',
		name: 'Diego López',
		active: true,
		role: USERS_ROLES.STUDENT
	},
	{
		username: 'el_fulgen',
		name: 'Fulgencio Suarez',
		active: false,
		role: USERS_ROLES.OTHER
	},
	{
		username: 'el_Can',
		name: 'Cándido López',
		active: true,
		role: USERS_ROLES.TEACHER
	}
]

const App = () => <UsersList initialUsers={USERS} />

export default App
