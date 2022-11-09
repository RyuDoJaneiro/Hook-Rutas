import React from 'react'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <form action="registrar.php" method="POST" className="">
    <div className="row ">
        <label htmlFor="" className="ms-5 ps-3">Nombre Usuario</label>
        <span className="ms-auto my-1 py-2 col-1 border  rounded-start shadow border-2 border-dark">
            <i className="bi bi-people px-auto fw-bold"></i>
        </span>
        
        <input type="text" name="usuario" id="usuario" className="me-auto my-1 py-2 col-8  border border-dark border-2 rounded-end shadow" placeholder="Usuario" required>
        </input>
        <br/>
        <label htmlFor="" className="ms-5 ps-3">Contraseña</label>
        <span className="ms-auto my-1 py-2 col-1 border  rounded-start shadow border-2 border-dark">
            <i className="bi bi-lock px-auto fw-bold"></i>
        </span>
        
        <input type="password" name="contrar" id="contrar" className="me-auto my-1 py-2 col-8 border border-dark border-2 rounded-end shadow" placeholder="Contraseña" required>
        </input>
        <br/>
        <label htmlFor="" className="ms-5 ps-3">Confirme su Contraseña</label>
        <span className="ms-auto my-1 py-2 col-1 border  rounded-start shadow border-2 border-dark">
            <i className="bi bi-lock px-auto fw-bold"></i>
        </span>
        <input type="password" name="contrarConfirm" id="contrarConfirm" className="me-auto my-1 py-2 col-8 border border-dark border-2 rounded-end shadow" placeholder="Contraseña" required>
        </input>
        <br/>
        <label htmlFor="" className="ms-5 ps-3">Correo</label>
        <span className="ms-auto my-1 py-2 col-1 border  rounded-start shadow border-2 border-dark">
            <i className="bi bi-at px-auto fw-bold"></i>
        </span>
        <input type="email" name="emailr" id="emailr" className="me-auto my-1 py-2 col-8 border border-dark border-2 rounded-end shadow" placeholder="user@email.com" required>
        </input>
        <br/>
        <hr/>
        <br/>
        <label htmlFor="" className="ms-5 ps-3 mb-3">Opcional </label>
        <br/>
        <label htmlFor="" className="ms-5 ps-3">Nombre </label>
        <span className="ms-auto  py-2 my-2 col-1 bg-primary border  rounded-start shadow border-2 border-dark">
            <i className="bi bi-person px-auto fw-bold py-2 text-white"></i>
        </span>
        <input type="text" name="nombre" id="nombre" className="me-auto py-2 my-2 col-8 border border-dark border-2 rounded-end shadow" placeholder="nombre">
        </input>
        <br/>
        <label htmlFor="" className="ms-5 ps-3">Número telefónico </label>
        <span className="ms-auto  py-2 my-2 col-1 border  rounded-start shadow border-2 border-dark">
            <i className="bi bi-telephone px-auto fw-bold py-2 "></i>
        </span>
        <input type="number" name="telefono" id="telefono" className="me-auto py-2 my-2 col-8 border border-dark border-2 rounded-end shadow" placeholder="+54 011 205060">
        </input>
        <br/>
        <div className="mx-auto col-5 my-2">
        <button type="submit" className="btn btn-success btn-lg" name="registrarse">Registrarse</button>
        </div>
    </div>
</form>

    // <div>Register
    //   <form id="login-form">
    //                 <div className="mb-3">
    //                   <label htmlFor="UserInput-login" className="form-label">Nombre de usuario</label><br/>
    //                   <input type="text" id="UserInput-login" aria-describedby="emailHelp"/>
    //                 </div>
    //                 <div className="mb-3">
    //                   <label htmlFor="UserInput-login" className="form-label">email</label><br/>
    //                   <input type="email" id="UserInput-login" aria-describedby="emailHelp"/>
    //                 </div>
    //                 <div className="mb-3">
    //                   <label htmlFor="PasswordInput-login" className="form-label">Contraseña</label><br/>
    //                   <input type="password" id="PasswordInput-login"></input>
    //                 </div>
    //                 <div className="mb-3">
    //                   <label htmlFor="PasswordInput-login" className="form-label">Confirmar contraseña</label><br/>
    //                   <input type="password" id="PasswordInput-login"></input>
    //                 </div>
    //                 <button type="submit" id='ButtonSubmit-login'>Enviar</button>
    //               </form>
    // </div>
  )
}
