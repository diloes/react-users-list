import { SORT_OPTIONS } from '../constants/sortOptions'
import InputCheckBox from './forms/InputCheckBox'
import InputSearch from './forms/InputSearch'
import Select from './forms/Select'
import style from './UserListFilters.module.css'

// TODO: video: Evitando valores mágicos min: 5:35

const UsersListFilter = ({ search, setSearch, onlyActive, setOnlyActive, sortBy, setSortBy }) => (
	<div className={style.form}>
		<div className={style.row}>
			{/* Al ser un input controlado funciona en tiempo real Si fuera no controlado sólo se 'setearía' 
				cuando activemos el listener(ej: click al botón) */}
			<InputSearch
				placeholder='Buscar...'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>

			<Select value={sortBy} onChange={e => setSortBy(Number(e.target.value))}>
				<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
				<option value={SORT_OPTIONS.NAME}>Por nombre</option>
				<option value={SORT_OPTIONS.ROLE}>Por rol</option>
				{/* Sólo se mostrará si onlyActive es false */}
				{!onlyActive && <option value={SORT_OPTIONS.ACTIVE}>Por activos</option>}
			</Select>
		</div>
		<div className={style.row}>
			<div className={style.active}>
				<InputCheckBox
					className={style.checkbox}
					checked={onlyActive}
					onChange={e => setOnlyActive(e.target.checked)}
				/>
				<p>Mostrar sólo activos</p>
			</div>
		</div>
	</div>
)

export default UsersListFilter
