import { useFilters } from '../lib/hooks/useFilters'
import {
	filerUsersByName,
	filterActiveUsers,
	paginateUsers,
	sortUsers
} from '../lib/users/filterUsers'
import style from './UsersList.module.css'
import UsersListFilter from './UsersListFilters'
import UsersListPagination from './UsersListPagination'
import UsersListRows from './UsersListRows'

const UsersList = ({ initialUsers }) => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters()

	const { users, totalPages } = getUsers(initialUsers, filters)

	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de Usuarios</h1>
			<UsersListFilter
				search={filters.search}
				sortBy={filters.sortBy}
				onlyActive={filters.onlyActive}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={users} />
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			/>
		</div>
	)
}

const getUsers = (
	initialUsers,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	// No importa el orden. Las dos se combinan perfectamente y sin orden de uso ni nada.
	let usersFiltered = filterActiveUsers(initialUsers, onlyActive)
	usersFiltered = filerUsersByName(usersFiltered, search)
	usersFiltered = sortUsers(usersFiltered, sortBy)
	// Calcular total de pgs cuando ya tenemos el total de users y antes de paginar estos
	const totalPages = Math.ceil(usersFiltered.length / itemsPerPage)
	usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage)

	return { users: usersFiltered, totalPages }
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
