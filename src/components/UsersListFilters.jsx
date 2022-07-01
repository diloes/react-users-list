import style from './UserListFilter.module.css'

const UsersListFilter = ({ search, setSearch, onlyActive, setOnlyActive, sortBy, setSortBy }) => (
	<form className={style.form}>
		{/* Al ser un input controlado funciona en tiempo real Si fuera no controlado sólo se 'setearía' 
				cuando activemos el listener(ej: click al botón) */}
		<input type='text' value={search} onChange={ev => setSearch(ev.target.value)} />

		<div className={style.active}>
			<input type='checkbox' checked={onlyActive} onChange={e => setOnlyActive(e.target.checked)} />
			<span>Sólo activos</span>
		</div>

		<select value={sortBy} onChange={e => setSortBy(Number(e.target.value))}>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
		</select>
	</form>
)

export default UsersListFilter
