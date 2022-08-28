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
				if (a.role === USERS_ROLES.STUDENT && b.role === USERS_ROLES.OTHER) return -1
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
