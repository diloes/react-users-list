import ReactDOM from 'react-dom'
import './index.css'

const Title = () => <h1>Listado de Usuarios</h1>

const User = ({ name, active, role }) => {
  return (
    <div className='user'>
      <span className='name' >{name}</span>
      <span className='active' >{active}</span>
      <span className='role' >{role}</span>
    </div>
  )
}

const app = (
	<div className='list'>
		<Title />
    <User name='Pablo Castellanos' active='activo' role='Profesor' />
    <User name='Diego López' active='activo' role='Alumno' />
	</div>
)

const container = document.getElementById('root')

ReactDOM.render(app, container)
