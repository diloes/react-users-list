import { useState } from 'react'
import { SORT_OPTIONS } from '../../constants/sortOptions'

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFATULT,
		page: 1,
		itemsPerPage: 2
	})

	const setSearch = search =>
		setFilters({
			...filters,
			page: 1,
			search
		})

	const setSortBy = sortBy => {
		setFilters({
			...filters,
			sortBy
		})
	}

	const setPage = newPage =>
		setFilters({
			...filters,
			page: newPage
		})

	const setItemsPerPage = newItemsPerPage =>
		setFilters({
			...filters,
			itemsPerPage: newItemsPerPage
		})

	const setOnlyActive = onlyActive => {
		// Si activamos el check 'Solo activos' y a la vez usamos el filtro 'Por activación'
		const newSortBy =
			onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE
				? SORT_OPTIONS.DEFATULT
				: filters.sortBy

		setFilters({
			...filters,
			sortBy: newSortBy,
			page: 1,
			onlyActive
		})
	}

	return {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	}
}
