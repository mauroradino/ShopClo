import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Seleccion/Seleccion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../context/ShopContext';
import bannerRunning from '../../assets/bannerRunning.jpg'


const HeadphonesPage = () => {
  const { Running, setSelectedProduct } = useContext(ShopContext);

  let filtradoRunning = Running.filter((Running)=> Running.categoria === "running");
  console.log("filtrado Running", Running)
  
  const handleButtonClick = (producto) => {
    setSelectedProduct(producto);
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <img src={bannerRunning} className='banner' />
      <h1 className='tituloSeccion'>Seccion Runinng (UNISEX)</h1>
      <div className='grid_productos_MadridHombres'>
        {filtradoRunning.map((producto) => (
          <div className={`card cardProductos card${producto.id}`} key={producto.id}>
            <img src={producto.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Cost: ${producto.precio}</p>
              <Link
                className='btn_masDetalles'
                onClick={() => handleButtonClick(producto)}
                to={`/Item/${producto.id}`}
              >
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesPage;
