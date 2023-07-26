import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import './LoginPage.css';
import Swal from 'sweetalert2';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { registered, setRegistered } = useContext(ShopContext);

  const handleInicioSesion = async (e) => {
    e.preventDefault();
    const email = document.getElementById("MInicio");
    const password = document.getElementById("PasswordInicio");
    const emailInicio = email.value
    const passwordInicio = password.value

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, emailInicio, passwordInicio);
      setRegistered(true);
      Swal.fire({
        icon: 'success',
        title: `Sesion iniciada como: ${email}`,
      });
      const user = userCredential.user;
      return user;
    } catch (error) {
      let errorMessage;
      if (error.code === "auth/invalid-email") {
        errorMessage = "El correo electrónico no es válido.";
      } else {
        errorMessage = "Credenciales de inicio de sesión inválidas.";
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage + error.message
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const mail = document.getElementById("MailRegistro");
    const password = document.getElementById("PasswordRegistro");
    console.log(mail.value)
   

    let auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, mail.value, password.value);
      mail.value = "";
      password.value = "";
      Swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',
      });
    } catch (error) {
      let errorMessage;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Error al registrarse, el correo electrónico indicado ya está en uso.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Error al registrarse, la contraseña debe tener al menos 6 caracteres.";
      } else {
        errorMessage = "Error al registrarse. Por favor, inténtalo nuevamente más tarde.";
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      });
    }
  };

  const passwordRecover = async () => {
    try {
    const email = document.getElementById("MInicio");
      
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email.value);
      alert("Se ha enviado un correo electrónico de restablecimiento de contraseña. Por favor, verifica tu bandeja de entrada.");
    } catch (error) {
      alert("Hubo un problema al enviar el correo electrónico de restablecimiento de contraseña. Por favor, inténtalo nuevamente más tarde.");
      console.error("Error en el restablecimiento de contraseña:", error);
    }
  };

 const desloguearse = () =>{
   const auth = getAuth();
   auth.signOut()
   .then(() => {
    // Se cerró sesión exitosamente
    console.log("¡Has cerrado sesión!");
    setRegistered(false)
    Swal.fire({
      icon: 'success',
      title: `Sesion Cerrada`,
    });
  })
  .catch((error) => {
    // Si ocurre un error al cerrar sesión
    console.error("Error al cerrar sesión:", error);
  });
 }


  return (
    <body className=" form d-flex align-items-center">
<main className="form-signin w-100 m-auto">
  <form id='formularioRegistro'>
    <img class="mb-4" src={logo} alt="" width="150" height="100" />
    <h1 class="h3 mb-3 fw-normal">Registrate</h1>
    <div class="form-floating">
      <input type="email" className="form-control" id="MailRegistro" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="PasswordRegistro" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <button className="btnRegistro btn-primary w-50 " type="submit" onClick={handleSubmit}>Registrate</button>
  </form>

  <form id='formularioInicio'>
    <h1 class="h3 mb-3 fw-normal">Inicia Sesión</h1>
    <div class="form-floating">
      <input type="email" className="form-control" id="MInicio" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="PasswordInicio" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
    <div className='inicioBajo'>
    <button className="btnRegistro btn-primary w-100 " type="submit" onClick={handleInicioSesion}>Inicia Sesión</button>
    <Link className='olvide' onClick={passwordRecover}>Olvidé mi contraseña</Link>
    {registered ? <Link className='btnRegistro' onClick={desloguearse}>Desloguearse</Link> : null}
    </div>
  </form>
</main>
<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

    

</body>
  )
}

export default LoginPage
