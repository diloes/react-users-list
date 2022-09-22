import { SORT_OPTIONS } from '../../constants/sortOptions'
import { USERS_ROLES } from '../../constants/userRoles'

export const filerUsersByName = (users, search) => {
	// Si no hay busqueda retorna todos los users
	if (!search) return [...users]
	// Ponemos en minusculas el valor del input
	const lowerCaseSearch = search.toLowerCase()
	// user.name.toLowerCase() -> ponemos en minus también los users almacenados en el estado
	// y nos devuelve los que incluyen el input
	return users.filter(user => user.name.toLowerCase().includes(lowerCaseSearch))
}

export const filterActiveUsers = (users, active) => {
	// Si no está marcado no hay que filtrar, retornamos todos
	if (!active) return [...users]
	// Retornamos los users que tienen active, osea active: true
	return users.filter(user => user.active)
}

export const sortUsers = (users, sortBy) => {
	// Creamos una copia de users para no modificar el users original al ordenarlo
	const sortedUsers = [...users]

	// Es recomendable hacer una tabla como la que tenemos en el video 'Revisando la lógica de filtrado'
	switch (sortBy) {
		// by Name
		case SORT_OPTIONS.NAME:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1
				if (a.name < b.name) return -1
				return 0
			})
		// by Role
		case SORT_OPTIONS.ROLE:
			return sortedUsers.sort((a, b) => {
				if (a.role === b.role) return 0
				if (a.role === USERS_ROLES.TEACHER) return -1
				if (a.role === USERS_ROLES.STUDENT && b.role === USERS_ROLES.OTHER)
					return -1
				return 1
			})
		// by Active
		case SORT_OPTIONS.ACTIVE:
			return sortedUsers.sort((a, b) => {
				if (a.active === b.active) return 0
				if (a.active && !b.active) return -1
				return 1
			})

		default:
			return sortedUsers
	}
}

export const paginateUsers = (users, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	// Calcular total de pgs cuando ya tenemos el total de users y antes de paginar estos
	const totalPages = Math.ceil(users.length / itemsPerPage)

	const paginatedUsers = users.slice(startIndex, endIndex)

	return { paginatedUsers, totalPages }
}

/**
 * NOTAS:
 * paginateUsers startIndex lógica:
 * Queremos la pag 1, le tenemos que restar 1 porque slice empieza por 0
 * y lo multiplicamos por los items que queremos por pag.
 * (page - 1) * itemsPerPage
 * (1 - 1 = 0) * 2 = 0 -> slice desde item 0 -> muestra items 0, 1
 * (2 - 1 = 1) * 2 = 2 -> slice desde item 2 -> muestra items 2, 3
 * (3 - 1 = 2) * 2 = 4 -> slice desde item 4 -> muestra items 4, 5
 * (4 - 1 = 3) * 2 = 6 -> slice desde item 6 -> muestra items 6, 7
 * Si quisieramos 4 items por pag
 * (1 - 1 = 0) * 4 = 0 -> slice desde item 0 -> muestra items 0, 1, 2, 3
 * (2 - 1 = 1) * 4 = 4 -> slice desde item 4 -> muestra items 4, 5, 6, 7
 * (3 - 1 = 2) * 4 = 8 -> slice desde item 8 -> muestra items 8, 9, 10, 11
 * (4 - 1 = 3) * 4 = 12 -> slice desde item 12 -> muestra items 12, 13, 14, 15
 *
 */
