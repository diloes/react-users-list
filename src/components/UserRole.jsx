import { USERS_ROLES } from '../constants/userRoles'
import style from './UserRole.module.css'

const ROLE_STYLES = {
	[USERS_ROLES.TEACHER]: ['Profesor', style.teacher],
	[USERS_ROLES.STUDENT]: ['Alumno', style.student],
	[USERS_ROLES.OTHER]: ['Otro', style.other]
}

const UserRole = ({ role }) => {
	// Destructuring de ROLE_STYLES
	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other

	return <span className={`${style.role} ${roleClassname}`}>{roleName}</span>
}

export default UserRole

/**
 * NOTAS:
 * - Todo lo que sea constante, como ROLE_STYLES lo pondremos fuera del componente
 * para que no se renderice cada vez que se renderice este.
 * Lo que sea variable o dependiente lo pondremos dentro.
 */
