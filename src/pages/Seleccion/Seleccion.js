import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Seleccion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../context/ShopContext';
import bannerArg from '../../assets/bannerArg.jpeg'

const HeadphonesPage = () => {
  const { Hombres, setSelectedProduct } = useContext(ShopContext);

  let filtradoSeleccion = Hombres.filter((seleccion)=> seleccion.categoria === "seleccion");

  
  const handleButtonClick = (producto) => {
    setSelectedProduct(producto);
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <img src={bannerArg} className='banner' alt='banner'/>
      <h1 className='tituloSeccion'>Seccion Seleccion Argentina (HOMBRES)</h1>
      <div className='grid_productos_SeleccionHombres'>
        {filtradoSeleccion.map((producto) => (
          <div className={`card cardProductos card${producto.id}`} key={producto.id}>
            <img src={producto.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Precio: <s>${parseInt(producto.precio + ((15 * producto.precio)/ 100))}</s> $<b>{producto.precio}</b></p>
              <Link
                className='btn_masDetalles'
                onClick={() => handleButtonClick(producto)}
                to={`/Item/${producto.id}`}
              >
                Más Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesPage;
