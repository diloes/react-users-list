import InputCheckBox from './forms/InputCheckBox'
import InputSearch from './forms/InputSearch'
import Select from './forms/Select'
import style from './UserListFilters.module.css'

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
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
				<option value={2}>Por rol</option>
				{/* Sólo se mostrará si onlyActive es false */}
				{!onlyActive && <option value={3}>Por activos</option>}
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
