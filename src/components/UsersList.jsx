import { useState } from 'react'
import UserRow from './UserRow'
import style from './UsersList.module.css'

const UsersList = ({ users, children }) => {
	const [search, setSearch] = useState('')

	// Ponemos en minusculas el valor del input
	const normalizedSearch = search.toLowerCase()

	// user.name.toLowerCase() -> ponemos en minus también los users almacenados en el estado
	const usersFiltered = search
		? users.filter(user => user.name.toLowerCase().startsWith(normalizedSearch))
		: users

	// Por cada user renderizamos el componente UserRow
	const usersRendered =
		users.length > 0 ? (
			usersFiltered.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay usuarios</p>
		)

	return (
		<div className={style.list}>
			{children}
			{/* Al ser un input controlado funciona en tiempo real */}
			<input type='text' name='search' value={search} onChange={ev => setSearch(ev.target.value)} />
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
