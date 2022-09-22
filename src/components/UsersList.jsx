import { useFilters } from '../lib/hooks/useFilters'
import { useUsers } from '../lib/hooks/useUsers'
import style from './UsersList.module.css'
import UsersListFilter from './UsersListFilters'
import UsersListPagination from './UsersListPagination'
import UsersListRows from './UsersListRows'

const UsersList = () => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters()

	const { users, totalPages, error, loading } = useUsers(filters)

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
			<UsersListRows users={users} error={error} loading={loading} />
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
