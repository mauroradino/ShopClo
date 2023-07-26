import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Detalles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../context/ShopContext';
import Swal from 'sweetalert2'

const Detalles = () => {
  const { id } = useParams();
  const { selectedProduct, Hombres, Niños } = useContext(ShopContext);
  const { carrito, setCarrito } = useContext(ShopContext);

  let seleccionado = Hombres.find((product) => product.id === id) 

   if (selectedProduct === undefined) {
    const selectedProduct2 = Niños.find((product) => product.id === id);
    seleccionado = selectedProduct2;
  } else {
    seleccionado = selectedProduct;
  } 

  const handleAddToCart = () => {
    setCarrito([...carrito, seleccionado]);
    console.log(carrito);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto añadido',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      {seleccionado ? (
        <>
          <h1>Detalles</h1>
          <div className='detailCard'>
            <div className={`cardDetail`}>
              <div id='carouselExampleIndicators' className='carousel slide'>
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={seleccionado?.imagenURL} className="d-block imagenCarrousel" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={seleccionado?.imagenURL2} className="d-block imagenCarrousel" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={seleccionado?.imagenURL3} className="d-block imagenCarrousel" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{seleccionado?.nombre}</h5>
                <p className='card-text-details'>{seleccionado?.descripcion}</p>
                <p className='precio'>Precio: $ {seleccionado.precio}</p>
                <Link className='LinkDetails' onClick={handleAddToCart}>
                  Añadir al carrito
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default Detalles;
