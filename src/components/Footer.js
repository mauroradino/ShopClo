import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
  return (
    <div class="footer container">
      <hr></hr>
    <footer>
      <ul class="nav justify-content-center border-bottom">
        <li class="nav-item"><Link to='/'><p class="nav-link px-2 text-body-secondary">Home</p></Link></li>
        <li class="nav-item"><Link to='/'><p class="nav-link px-2 text-body-secondary">Clients</p></Link></li>
        <li class="nav-item"><Link to='/'><p class="nav-link px-2 text-body-secondary">About Us</p></Link></li>
        <li class="nav-item"><Link to='/category'><p class="nav-link px-2 text-body-secondary">Products</p></Link></li>
        <li class="nav-item"><Link to='/'><p class="nav-link px-2 text-body-secondary">FAQs</p></Link></li>
      </ul>
      <p class="text-center text-body-secondary">© 2023 FISHOP, Inc</p>
    </footer>
  </div>
  )
}

export default Footer
