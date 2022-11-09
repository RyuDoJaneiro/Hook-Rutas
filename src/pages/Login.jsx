import React from 'react'
//yo agregue
import { Link } from 'react-router-dom'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
    return (

        <form action="" className="">
            <div className="row">
                <label for="" className="ms-5 ps-3">
                    Nombre Usuario o Correo
                </label>
                <span className="ms-auto my-1 py-2 col-1 border  rounded-start shadow border-2 border-dark">
                    <i className="bi bi-people px-auto fw-bold"></i>
                </span>
                <input type="text" name="" id="usuario" className="me-auto my-1 py-2 col-8  border border-dark border-2 rounded-end shadow" placeholder="Usuario Correo Electrónico" required>
                </input>
                <br />

                <label for="" className="ms-5 ps-3">Contraseña</label>
                <span className="ms-auto my-1 py-2 col-1 border  rounded-start shadow border-2 border-dark">
                    <i className="bi bi-lock px-auto fw-bold"></i>
                </span>
                <input type="password" name="" id="contra" className="me-auto my-1 py-2 col-8  border border-dark border-2 rounded-end shadow" placeholder="Contraseña" required />
                <br />
                <div className="mx-auto  col-5 my-2">
                    <button type="button" className="btn btn-success btn-lg" onclick="iniciarSesion()">Iniciar Sesión</button>
                </div>
            </div>
        </form>





    )
}
