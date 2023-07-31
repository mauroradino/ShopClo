import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShopContext } from '../../context/ShopContext';
import './Inicio.css';
import bannerEvento1 from '../../assets/bannerEvento1.avif'
import bannerEvento2 from '../../assets/bannerEvento2.avif'
import bannerEvento3 from '../../assets/bannerEvento3.avif'
import bannerRunning from '../../assets/bannerRunning.jpg'

function Inicio() {
  const { Hombres } = useContext(ShopContext);

  const productosDestacados = [Hombres[0], Hombres[1], Hombres[2], Hombres[3], Hombres[4], Hombres[5], Hombres[6], Hombres[7]];


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      console.log("Ancho de Pantalla:", screenWidth)
    };
  }, [screenWidth]);


let cantCards


if (screenWidth < 600) {
  cantCards = 1;
  console.log(cantCards);
} else if (screenWidth >= 600 && screenWidth < 920) {
  cantCards = 2;
  console.log(cantCards);
} else if (screenWidth >= 920 && screenWidth < 1200) {
  cantCards = 3;
  console.log(cantCards);
} else if (screenWidth >= 1200) {
  cantCards = 4;
  console.log(cantCards);
}
  const productosDestacadosGrupos = [];
  for (let i = 0; i < productosDestacados.length; i += cantCards) {
    const grupo = productosDestacados.slice(i, i + cantCards);
    productosDestacadosGrupos.push(grupo);
  }


  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <div className='bienvenida'>
        <div className='textoBienvenida'>
        <h1 className="tituloBienvenida">Comienza el mundial femenino!</h1>
        <h4 className='subtituloBienvenida'>Visita nuestra seccion de la seleccion argentina!</h4>
        <button className='btn_IrAVer'>Ir a ver</button>
        </div>
        <h2 className='tituloMobile'>Bienvenidos</h2>
      </div>
      <div className='bodyHome'>
        <p className='tituloDestacados'>Productos Destacados</p>
        <div id="carouselExample" className="carousel carousel-container slide">
          <div className="carousel-inner">
            {productosDestacadosGrupos.map((grupo, index) => (
              <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                {grupo.map((destacado)=>(
                <Link to={`/producto/${destacado?.id}`}>
                  <div className="card cardDestacado" style={{ width: "18rem" }}>
                    <img src={destacado?.imagenURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{destacado?.nombre}</h5>
                      <Link to={`/producto/${destacado?.id}`} className="btn btn-primary-destacado">Ver más</Link>
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='divRunning'>
          <img src={bannerRunning} className='running' />
          <h2 className='tituloRunning'>Conoce nuestro apartado de Running!</h2>
          <Link to="/Running" className='btnRunning'>Conocer más</Link>
        </div>
        <div className='Eventos'>
          <h2>Eventos Que Marcan Tendencia</h2>
          <div className='gridEventos'>
            <div className='evento1'><Link target='_blank' to="https://maratondebuenosaires.com/"><img width={"80%"} src={bannerEvento1}/></Link><p className='pieEvento'>Maratón BSAS 21km</p></div>
            <div className='evento2'><Link target='_blank' to="https://www.fifa.com/fifaplus/es/tournaments/womens/womensworldcup/australia-new-zealand2023?intcmp=(p_fifaplus)_(c_webheader-main)_(sc_tournaments)_(ssc_fwwc-2023)_(da_04052023)_(l_es)"><img width={"80%"} src={bannerEvento2}/></Link><p className='pieEvento'>Mundial de Futbol Femenino 2023</p></div>
            <div className='evento3'><Link target='_blank' to="https://www.adidas.com.ar/sustentabilidad"><img width={"80%"} src={bannerEvento3}/></Link><p className='pieEvento'>Adidas End Plastic Waste</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
