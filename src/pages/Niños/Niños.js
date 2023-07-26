import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../context/ShopContext';
import './Niños.css';

function Categorias() {
  const { Niños } = useContext(ShopContext);

  let filtradoSeleccion = Niños.filter((seleccion)=> seleccion.categoria === "seleccion");
  let filtradoBoca = Niños.filter((Boca)=> Boca.categoria === "boca");

  console.log(filtradoBoca)

  return (
    <>
    <div className='contenedor-categorias'>
        <h1 className='titulo_seccion'>Seccion Niños</h1>
      <div className='fila1-categorias'>
      <Link to='/seleccionNiños'>
      <div class="card" style={{width: "18rem", border: "2px solid black"}}>
        <img src={filtradoSeleccion[0]?.imagenURL} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Seccion Seleccion Argentina</h5>
        </div>
      </div>
      </Link>
      <Link to='/bocaNiños'>
      <div class="card" style={{width: "18rem", border: "2px solid black"}}>
        <img src={filtradoBoca[0]?.imagenURL} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Seccion Boca Juniors</h5>
        </div>
      </div>
      </Link>
      </div>
    </div>
    <div>
    <div className='grid_productos_Niños'>
        {Niños.map((producto) => (
          <div className={`card cardProductos card${producto.id}`} key={producto.id}>
            <img src={producto.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Cost: $<s>{producto.precio}</s> <b>${parseInt(producto.precio - ((15 * producto.precio)/ 100))}</b></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Categorias;
