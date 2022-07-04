import UserRole from './UserRole'
import style from './UserRow.module.css'
import UserStatus from './UserStatus'

const UserRow = ({ username, name, active, role = 'Profesor', ...restProps }) => {
	return (
		<div className={style.user} {...restProps}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}></div>
		</div>
	)
}

export default UserRow

/**
 * NOTAS:
 * - {...restProps} -> son el resto de props que no hemos nombrado en el destructuring.
 * Por ejemplo el onClick del primer user.
 * - children es una prop especial en React que se refiere a lo que hay entre la etiqueta de
 * apertura y la de cierre.
 */
