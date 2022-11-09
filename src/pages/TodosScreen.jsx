import React from 'react'
import { Link } from 'react-router-dom'

export const TodosScreen = () => {
  return (
    <div>TodosScreen
{/* <Link to="/login"><button>Iniciar Sesión</button></Link> */}
{/* <Link to="/register"><button>Registrar</button></Link> */}
<div className="mx-auto  col-5 my-2">
<Link to="/login"><button type="button" className="btn btn-success btn-lg" onClick="iniciarSesion()">Iniciar Sesión</button></Link>
</div>

<div className="mx-auto col-5 my-2">
<Link to="/register"><button type="submit" className="btn btn-success btn-lg" onClick="registerUser()" name="registrarse">Registrarse</button></Link>
 </div>
 </div>
  )
}
