import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CardWidget from "./CardWidget.js";
import logo from '../assets/logo.png'
import { ShopContext } from "../context/ShopContext";
function NavBar() {
  const { registered } = useContext(ShopContext);
  
  return (
    <>
    <div className="marcoSuperior">
        <h6>15% DE DESCUENTO EN INDUMENTARIA DE LA SELECCIÓN ARGENTINA</h6>
      </div>
    <nav className="navbar navbar-expand-lg header">
      <div
        className="container-fluid"
        style={{ backgroundColor: "#CCCACA" }}
      >
        <Link to="/" className="h1_navbar">
          <img src={logo} width="70px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/Niños">
                Niños
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/SobreNosotros">
                Mujeres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/categoria">
                Hombres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link linkLogin" to="/Login">
                Registrate / Inicia Sesion
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CardWidget className="CardWidget" />
      <Link className="loginLogo" to="/Login">
        {registered ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-fill-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16">
       <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
       </svg>}
        </Link>
    </nav>
    </>
  );
}

export default NavBar;
