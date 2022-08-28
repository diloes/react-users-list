import { useState } from 'react'
import { SORT_OPTIONS } from '../../constants/sortOptions'

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFATULT
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
		// Si activamos el check 'Solo activos' y a la vez usamos el filtro 'Por activación'
		const newSortBy =
			onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE ? SORT_OPTIONS.DEFATULT : filters.sortBy

		setFilters({
			...filters,
			setFilters: newSortBy,
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
