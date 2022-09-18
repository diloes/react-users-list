import IconButton from '../buttons/IconButton'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import style from './PageSelector.module.css'

const PageSelector = ({ page, setPage, totalPages }) => {
	const isFirstPage = page === 1
	const isLastPage = page === totalPages || totalPages === 0

	return (
		<div className={style.wrapper}>
			<IconButton
				filled
				icon={ArrowLeftIcon}
				disabled={isFirstPage}
				onClick={() => setPage(page - 1)}
			/>
			<span>
				{/* Muestra el total de pgs o 1 cuando no hay páginas */}
				Página {page} de {totalPages || 1}
			</span>
			<IconButton
				filled
				disabled={isLastPage}
				icon={ArrowRightIcon}
				onClick={() => setPage(page + 1)}
			/>
		</div>
	)
}

export default PageSelector

/**
 * NOTAS:
 * - || totalPages === 0 -> Para que se desactiven los botones cuando no haya resultados que mostrar
 */
