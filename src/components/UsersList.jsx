import { useState } from 'react'
import { useFilters } from '../lib/hooks/useFilters'
import { filerUsersByName, filterActiveUsers, sortUsers } from '../lib/users/filterUsers'
import style from './UsersList.module.css'
import UsersListFilter from './UsersListFilters'
import UsersListRows from './UsersListRows'

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters()

	const { users } = useUsers(initialUsers)

	// No importa el orden. Las dos se combinan perfectamente y sin orden de uso ni nada.
	let usersFiltered = filterActiveUsers(users, onlyActive)
	usersFiltered = filerUsersByName(usersFiltered, search)
	usersFiltered = sortUsers(usersFiltered, sortBy)

	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de Usuarios</h1>
			<UsersListFilter
				search={search}
				sortBy={sortBy}
				onlyActive={onlyActive}
				{...setFiltersFunctions}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	)
}

const useUsers = initialUsers => {
	const [users] = useState(initialUsers)

	return { users }
}

export default UsersList

/**
 * NOTAS:
 * - {...restProps} -> son el resto de props que no hemos nombrado en el destructuring.
 * Por ejemplo el onClick del primer user.
 * - children es una prop especial en React que se refiere a lo que hay entre la etiqueta de
 * apertura y la de cierre.
 * - [...users].sort() y no users.sort() -> Para actuar sobre una copia de users y no modificar
 * el propio array users, que si lo hicieramos no podría volver a desordenarse porque estaría
 * modificado el array original y no hay manera de volver a como estaba porque ya no habria
 * ninguna referencia al estado anterior.
 */
