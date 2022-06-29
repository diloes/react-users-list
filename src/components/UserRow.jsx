import { useState } from 'react'
import UserRole from './UserRole'
import style from './UserRow.module.css'
import UserStatus from './UserStatus'

const UserRow = ({ name, active = 'Activo', role = 'Profesor', ...restProps }) => {
	const [activeState, setActiveState] = useState(active)

	return (
		<div className={style.user} {...restProps}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={activeState} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button
					onClick={() => {
						setActiveState(!activeState)
					}}
				>
					{activeState ? 'Desactivar' : 'Activar'}
				</button>
			</div>
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
