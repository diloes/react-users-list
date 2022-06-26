import UserRow from './UserRow'
import style from './UsersList.module.css'

const UsersList = ({ users, children }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay usuarios</p>
		)

	return (
		<div className={style.list}>
			{children}
			{usersRendered}
		</div>
	)
}

export default UsersList

/**
 * NOTAS:
 * - {...restProps} -> son el resto de props que no hemos nombrado en el destructuring.
 * Por ejemplo el onClick del primer user.
 * - children es una prop especial en React que se refiere a lo que hay entre la etiqueta de
 * apertura y la de cierre.
 */
