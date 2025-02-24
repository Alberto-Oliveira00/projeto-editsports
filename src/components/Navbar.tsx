import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className='img-edit'>
          <img src="../assets/img/edit-logo-novo.png" alt="Logo edit"/>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="#produtos" className="navbar-link">Produtos</a>
          <a href="#clientes" className="navbar-link">Clientes</a>
          <a href="#contato" className="navbar-link">Contato</a>
          <a
            href="https://wa.me/5511947814551"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
          <FontAwesomeIcon icon= {faWhatsapp} className="icon"/>
            Fale com um Vendedor
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a
            href="#produtos"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Produtos
          </a>
          <a
            href="#clientes"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Clientes
          </a>
          <a
            href="#contato"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
          <a
            href="https://wa.me/5511947814551"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare className="icon" size={18} />
            Fale com um Vendedor
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;