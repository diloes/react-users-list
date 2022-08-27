const SearchIcon = props => (
	<svg
		{...props} // Poniendo aquí las props nos aseguramos que fill, stroke, viewBox
		fill='none' // no se van a modificar desde fuera
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
		></path>
	</svg>
)

export default SearchIcon

/* 
NOTAS:
 - Puede que haya una prop que coincida al llamar al componente con una que ya tengamos 
 dentro del componente. En este caso el lugar donde hayamos includio {...props} influirá.
 Siempre prevalece la prop que está más 'al final'.
 Por ejemplo: en este svg si lo llamamos -> <SearchIcon fill='loquesea' /> <- No cambiará 
 fill porque está después de las props. Si pusieramos las props detrás de fill si cambiaría.

    <svg
        fill='none'
        {... props} // aquí sí cambiaria fill
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
*/
