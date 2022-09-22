import { useEffect, useState } from 'react'
import {
	filerUsersByName,
	filterActiveUsers,
	paginateUsers,
	sortUsers
} from '../users/filterUsers'

const fetchUsers = async (setData, setError, signal) => {
	try {
		const res = await fetch('http://localhost:4000/users', { signal })
		if (res.ok) {
			const data = await res.json()
			setData(data)
		} else {
			setError()
		}
	} catch (error) {
		setError()
	}
}

const getUsersToDisplay = (
	users,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	// No importa el orden. Las dos se combinan perfectamente y sin orden de uso ni nada.
	let usersFiltered = filterActiveUsers(users, onlyActive)
	usersFiltered = filerUsersByName(usersFiltered, search)
	usersFiltered = sortUsers(usersFiltered, sortBy)

	const { paginatedUsers, totalPages } = paginateUsers(
		usersFiltered,
		page,
		itemsPerPage
	)

	return { paginatedUsers, totalPages }
}

export const useUsers = filters => {
	const [users, setUsers] = useState({
		data: [],
		error: false,
		loading: true
	})

	const setData = newData =>
		setUsers({ data: newData, loading: false, error: false })
	const setError = () => setUsers({ data: [], loading: false, error: true })

	useEffect(() => {
		// Para evitar memory leaks
		const controller = new AbortController()
		fetchUsers(setData, setError, controller.signal)
		// Cleaner]
		return () => controller.abort()
	}, [])

	const { paginatedUsers, totalPages } = getUsersToDisplay(users.data, filters)

	return {
		users: paginatedUsers,
		totalPages,
		loading: users.loading,
		error: users.error
	}
}
