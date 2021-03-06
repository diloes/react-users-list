import { useState } from 'react'
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
			<h1>Listado de Usuarios</h1>
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

const filerUsersByName = (users, search) => {
	// Si no hay busqueda retorna todos los users
	if (!search) return [...users]
	// Ponemos en minusculas el valor del input
	const lowerCaseSearch = search.toLowerCase()
	// user.name.toLowerCase() -> ponemos en minus también los users almacenados en el estado
	return users.filter(user => user.name.toLowerCase().startsWith(lowerCaseSearch))
}

const filterActiveUsers = (users, active) => {
	// Si no está marcado no hay que filtrar, retornamos todos
	if (!active) return [...users]
	// Retornamos los users que tienen active, osea active: true
	return users.filter(user => user.active)
}

const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers)

	return { users }
}

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users]
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1
				if (a.name < b.name) return -1
				return 0
			})

		default:
			return sortedUsers
	}
}

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	})

	const setSearch = search =>
		setFilters({
			...filters,
			search
		})

	const setSortBy = sortBy => {
		setFilters({
			...filters,
			sortBy
		})
	}

	const setOnlyActive = onlyActive => {
		setFilters({
			...filters,
			onlyActive
		})
	}

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	}
}

export default UsersList

/**
 * NOTAS:
 * - {...restProps} -> son el resto de props que no hemos nombrado en el destructuring.
 * Por ejemplo el onClick del primer user.
 * - children es una prop especial en React que se refiere a lo que hay entre la etiqueta de
 * apertura y la de cierre.
 * - [...users].sort() y no users.sort() -> Para actuar sobre una copia de users y no modificar
 * el propio array users, que si lo hicieramos no podría volver a desordenars porque estaría
 * modificado el array original y no hay manera de volver a como estaba porque ya no habria
 * ninguna referencia al estado anterior.
 */
