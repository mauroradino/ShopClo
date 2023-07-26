import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../Seleccion/Seleccion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../../context/ShopContext';
import bannerArg from '../../../assets/bannerArg.jpeg'
import './SeleccionNiños.css'

const HeadphonesPage = () => {
  const { Niños, setSelectedProduct } = useContext(ShopContext);

  let filtradoSeleccion = Niños.filter((seleccion)=> seleccion.categoria === "seleccion");

  
  const handleButtonClick = (producto) => {
    setSelectedProduct(producto);
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <img src={bannerArg} className='banner' />
      <h1 className='tituloSeccion'>Seccion Seleccion Argentina (NIÑOS)</h1>
      <div className='grid_productos_SeleccionNiños'>
        {filtradoSeleccion.map((producto) => (
          <div className={`card cardProductos card${producto.id}`} key={producto.id}>
            <img src={producto.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Cost: $<s>{producto.precio}</s> <b>${parseInt(producto.precio - ((15 * producto.precio)/ 100))}</b></p>
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
