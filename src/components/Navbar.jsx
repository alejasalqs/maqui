import React from 'react'
import {
  Link
} from "react-router-dom";
import logo from '../assets/img/Logo Maqui.png';

export const Navbar = () => {
    return (
        <>
        <nav id="header" className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="Logo de la empresa MaquiPrint" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalogo">Catálogo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
