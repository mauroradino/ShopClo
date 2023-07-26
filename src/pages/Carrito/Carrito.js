import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import db from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import "./Carrito.css";
import Swal from "sweetalert2";

const Cart = () => {
  const { carrito, setCarrito } = useContext(ShopContext);
  const [mail1, setMail1] = useState("");
  const [mail2, setMail2] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleMail1Change = (event) => {
    setMail1(event.target.value);
  };

  const handleMail2Change = (event) => {
    setMail2(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const igualdad =
    mail1 !== "" &&
    mail2 !== "" &&
    mail1 === mail2 &&
    inputValue !== "" &&
    inputValue2 !== "";
  let total = 0;

  const handleFinalizePurchase = () => {
    const randomOrder = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    let OrderNumber = randomOrder.toString();
    setDoc(doc(db, "compras", OrderNumber), {
      nombre: inputValue,
      apellido: inputValue2,
      correo: mail1,
      fecha: new Date().toLocaleString(),
      compra: carrito,
    });

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro?",
        text: "Estas por completar la compra.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, finalizar compra",
        cancelButtonText: "No, Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Compra finalizada",
            "Gracias por su compra",
            window.location.reload()
          );
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Tu compra fue cancelada"
          );
        }
      });
  };

  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="bodyCart">
        <div className="preTicket">
          <h2 className="tituloTicket">PRE TICKET</h2>
          <div className="datos">
            <div className="nombre">
              <p>Nombre: </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                name="Nombre"
              />
            </div>
            <div className="apellido">
              <p>Apellido: </p>
              <input
                type="text"
                value={inputValue2}
                onChange={handleInputChange2}
                name="apellido"
              />
            </div>
            <div className="mail">
              <p>Correo electrónico: </p>
              <input
                id="mail1"
                type="mail"
                value={mail1}
                name="mail"
                onChange={handleMail1Change}
              />
            </div>
            <div className="mail">
              <p>Confirmar Correo electrónico: </p>
              <input
                id="mail2"
                type="mail"
                value={mail2}
                name="mail"
                onChange={handleMail2Change}
              />
            </div>
            {igualdad ? (
              <button
                className="btnFinalizar"
                type="submit"
                onClick={handleFinalizePurchase}
              >
                Finalizar compra
              </button>
            ) : null}
          </div>
          {carrito.map((producto, i) => {
          total +=  producto.precio;
            return (
              <div className="ticketContent" key={i}>
                <h4>Producto: {producto.nombre}</h4>
                <p>Precio por unidad: ${producto.precio}</p>
              </div>
            );
          })}
          <h4 className="ticketContent">Total a pagar: ${total}</h4>
        </div>
        <div className="productosCart">
          {carrito.map((producto, i) => (
            <div className={`card cardCarrito card${producto.id}`} key={i}>
              <img
                src={producto.imagenURL}
                className="card-img-top-carrito"
                alt="Imagen Producto"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <button
                  className="buttonDelete"
                  onClick={() => {
                    const handleDeleteCard = (producto) => {
                      const index = carrito.findIndex(
                        (p) => p.id === producto.id
                      );
                      if (index !== -1) {
                        const updatedCarrito = [...carrito];
                        updatedCarrito.splice(index, 1);
                        setCarrito(updatedCarrito);

                        Swal.fire({
                          icon: "success",
                          title: "Producto eliminado del carrito",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      }
                    };

                    handleDeleteCard(producto);
                  }}
                  id={`deleteBtn-${producto.id}`}
                >
                  Eliminar del carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;