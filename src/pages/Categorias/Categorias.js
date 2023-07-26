import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../context/ShopContext';
import './Categorias.css';

function Categorias() {
  const { Hombres } = useContext(ShopContext);

  let filtradoSeleccion = Hombres.filter((seleccion)=> seleccion.categoria === "seleccion");
  let filtradoBoca = Hombres.filter((Boca)=> Boca.categoria === "boca");
  let filtradoMadrid = Hombres.filter((Madrid)=> Madrid.categoria === "madrid");
  console.log(filtradoMadrid)

  return (
    <>
    <div className='contenedor-categorias'>
      <h1 className='titulo_seccion'>Seccion Hombres</h1>
      <div className='fila1-categorias'>
      <Link to='/seleccion'>
      <div class="card" style={{width: "18rem", border: "2px solid black"}}>
        <img src={filtradoSeleccion[0]?.imagenURL} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Seccion Seleccion Argentina</h5>
        </div>
      </div>
      </Link>
      <Link to='/boca'>
      <div class="card" style={{width: "18rem", border: "2px solid black"}}>
        <img src={filtradoBoca[0]?.imagenURL} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Seccion Boca Juniors</h5>
        </div>
      </div>
      </Link>
      <Link to='/madrid'>
      <div class="card" style={{width: "18rem", border: "2px solid black"}}>
        <img src={filtradoMadrid[0]?.imagenURL} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Seccion Real Madrid</h5>
        </div>
      </div>
      </Link>
      </div>
    </div>
    <div className='grid_productoss CategoriaHombresGrid'>
        {Hombres.map((producto) => (
          <div className={`card cardProductos card${producto.id}`} key={producto.id}>
            <img src={producto.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">  Cost: ${producto.categoria === "seleccion" ? (<><s>{parseInt(producto.precio + (15 * producto.precio) / 100)}</s>{" "}<b>{producto.precio}</b></>) : (<>{producto.precio}</>)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categorias;
