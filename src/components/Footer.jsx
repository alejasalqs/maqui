import React from 'react'

export const Footer = () => {
    return (
        <>
        <footer className="page-footer font-small blue-grey lighten-5">

            <div style={{backgroundColor: '#F76c6c' }}>
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Conecta con nosotros en redes sociales!</h6>
                        </div>
                        
                        <div className="col-md-6 col-lg-7 text-center text-md-right">

                
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/bolsasdepapelCR/" className="fb-ic href-color onHover">
                                <i className="fab fa-facebook-f white-text mr-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bolsasdepapelcr" className="ins-ic href-color onHover">
                                <i className="fab fa-instagram white-text"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3 dark-grey-text">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Acerca de</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                        <p>
                            Maquiprint desea ser parte de su prestigiosa lista de proveedores, nuestro equipo humano, 
                            materia prima e impresiones le garantizan que sus trabajos sean de calidad
                        </p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase font-weight-bold">Productos</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                        <p>
                            <a className="href-color onHover">Bolsas</a>
                        </p>
                        <p>
                            <a className="href-color onHover">Etiquetas</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase font-weight-bold">Links útiles</h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p>
                        <a className="href-color onHover" href="#nosotros">Nosotros</a>
                    </p>
                    <p>
                        <a className="href-color" href="#servicios">Servicios</a>
                    </p>
                    <p>
                        <a className="href-color" href="catalogo.html">Catálogo</a>
                    </p> 
                    </div>
                    <adress className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-uppercase font-weight-bold">Contacto</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                        <p>
                            <i className="fas fa-home mr-3"></i>
                            Desamparados, San José
                        </p>

                        <p>
                            <a  className="fas fa-envelope mr-3"></a>
                            <a href="mailto:mercadeo@maquiprintjoab.com"  className="href-color onHover">mercadeo@maquiprintjoab.com</a>
                           
                        </p>

                        <p>
                            <a className="fas fa-phone mr-3"></a>
                            <a href="tel:+(506)22513606" className="href-color onHover">+ 506 22513606</a>
                        </p>

                        <p >
                            <a  className="fab fa-whatsapp mr-3"></a>
                            <a href="tel:+(506)88128648" className="href-color onHover">+ 506 88128648</a>
                        </p>
                        <p>
                            <a className="fab fa-whatsapp mr-3"></a>
                            <a href="tel:+(506)88260886" className="href-color onHover">+ 506 88260886</a>
                        </p>

                    </adress>

                </div>

            </div>
            <div className="footer-copyright text-center py-3">
                © Copyright: MaquiprintJoab
           <a target="_blank" rel="noreferrer" className="href-color onHover" href="#"></a>
            </div>

        </footer>
        </>
    )
}
