import React from 'react'
import '../assets/css/index.css';
import '../assets/css/ui.css';
import '../assets/css/bootstrap.min.css';
import {
  Link
} from "react-router-dom";

import img1 from '../assets/img/BolsasPromocional.jpg';
import img2 from '../assets/img/BolsasPromocional.jpg';
import img3 from '../assets/img/Etiquetas-05.png';
import catalogo1 from '../assets/CATÁLOGO DE SERVICIOS_Maquiprint2019.pdf';
import catalogo2 from '../assets/Catálogo productos MaquiPrint.pdf';
import { FormContacto } from '../components/FormContacto';

export const Main = () => {
    return (
        <>
          <header className="masthead">
        <div className="container">
            <div className="intro-text">
                <h1 className="intro-lead-in">Maquiprint!</h1>
                <div className="intro-heading text-uppercase">Tu mejor opción para hacer volar tus ideas</div>
            </div>
        </div>
    </header>

    <section id="servicios">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={img1} alt="Imagen ejemplo de bolsas" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">Producción de bolsas</h2>
                        <ul>
                            <li>Bolsas publicitarias</li>
                            <li>Bolsas de papel</li>
                            <li>Bolsas de tela</li>
                            <li>Bolsas personalizadas</li>
                        </ul>
                        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/catalogo">Ver catálogo</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={img2} alt="Imagen ejemplo de bolsas" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className="display-4">Impresión pequeño y gran formato</h2>
                        <ul>
                            <li>Volantes, Brochures</li>
                            <li>Colillas</li>
                            <li>Stickers</li>
                            <li>Carpetas</li>
                            <li>Roller up</li>
                            <li>Mantas</li>
                        </ul>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href={catalogo1} download>Descargar catálogo</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={img3} alt="Imagen ejemplo de etiquetas" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">Producción Etiquetas</h2>
                        <ul>
                            <li>Empaques de exportación</li>
                            <li>Etiquetas en rollo</li>
                            <li>Etiquetas adhesivas especiales </li>
                            <li>Etiquetas en cartulina</li>
                        </ul>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href={catalogo2} download>Descargar catálogo</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="page-section" id="contacto">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contáctanos</h2>
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <FormContacto />
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
