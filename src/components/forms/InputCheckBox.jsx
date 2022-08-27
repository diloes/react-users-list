import CheckIcon from '../icons/CheckIcon'
import style from './InputCheckbox.module.css'

const InputCheckBox = ({ className, ...props }) => (
	<label className={`${style.label} ${className || ''}`}>
		<input className={style.input} {...props} type='checkbox'></input>
		<CheckIcon className={style.check} />
	</label>
)

export default InputCheckBox
