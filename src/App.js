import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/Inicio/Inicio';
import AboutPage from './pages/Nosotros/Nosotros';
import DetailsPage from './pages/Detalles/Detalles';
import CategoryPage from './pages/Categorias/Categorias';
import Footer from './components/Footer';
import BocaNiñosPage from './pages/Niños/BocaNiños/BocaNiños';
import BocaPage from './pages/Boca/Boca';
import SeleccionNiñosPage from './pages/Niños/SeleccionNiños/SeleccionNiños';
import MadridPage from './pages/Madrid/Madrid';
import SeleccionPage from './pages/Seleccion/Seleccion';
import Cart from './pages/Carrito/Carrito';
import Runinng  from './pages/Running/Running';
import NiñosPage from './pages/Niños/Niños'
import LoginPage from './pages/Login/LoginPage'
import './App.css';
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <Router>
      <div className='App'>
      <ShopProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/SobreNosotros" element={<AboutPage/>} />
        <Route path="/categoria" element={<CategoryPage/>} />
        <Route path="/boca" element={<BocaPage/>}/>
        <Route path="/madrid" element={<MadridPage/>}/>
        <Route path="/seleccion" element={<SeleccionPage/>}/>
        <Route path="/bocaNiños" element={<BocaNiñosPage/>}/>
        <Route path="/seleccionNiños" element={<SeleccionNiñosPage/>}/>
        <Route path="/Niños" element={<NiñosPage/>}/>
        <Route path="/Running" element={<Runinng/>}/>
        <Route path='/Carrito' element={<Cart/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path="/item/:id" element={<DetailsPage/>}/>
      </Routes>
      </ShopProvider>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
