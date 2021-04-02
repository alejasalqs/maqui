import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getOneBag } from '../Data/db_helper';
import { succesAlert, warningAlert } from '../helpers/sweetAlert';
import { useForm } from '../hooks/useForm';

export const DetalleProducto = () => {


    let papel; 
    let impresion; 
    let cantidad;

    const [bag, setBag] = useState({});

    const { codBag } = useParams();


    useEffect(() => {
        getOneBag(codBag).then(resp => {
            //console.log(resp);
            setBag(resp);
        });
    }, [codBag])

    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        empresa: '',
        correo: '',
        telefono: '',
        comentarios: '',
    });

    const { nombre, correo, telefono, comentarios, empresa } = formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        papel = document.getElementById('DdlTipoPapel').value;
        impresion = document.getElementById('DdlImpresion').value;
        cantidad = document.getElementById('DdlCantidad').value;
        console.log(nombre, correo, telefono, comentarios, empresa, papel, impresion, cantidad, bag.nombre);
        if (checkFields()) {
            succesAlert();
        }
    }


    const checkFields = () => {
        if (!nombre) {
            warningAlert('nombre');
            return false;
        }

        if (!correo) {
            warningAlert('correo');
            return false;
        }

        if (!telefono) {
            warningAlert('telefono');
            return false;
        }

        if (!empresa) {
            warningAlert('empresa');
            return false;
        }

        if (papel == "1") {
            warningAlert('papel');
            return false;
        }

        if (cantidad == "1") {
            warningAlert('cantidad');
            return false;
        }

        if (impresion == "1") {
            warningAlert('impresion');
            return false;
        }

        return true;
    }

    return (
        <>
<div id="catalogoContainer" className="container">
        <section className="section-content bg padding-y-sm">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-md-9 col-sm-12">
                        <main className="card">
                            <div className="row no-gutters">
                                <aside className="col-sm-6 border-right">
                                    <article className="gallery-wrap">
                                        <div className="img-big-wrap">
                                            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active" data-interval="10000">
                                                        <img src={`../${bag.img_blanco}`} alt={`Imagen del producto ${bag.codigo}`} className="d-block w-100"/>
                                                    </div>
                                                    <div className="carousel-item" data-interval="2000">
                                                        <img src={`../${bag.img_negro}`}  alt={`Imagen del producto ${bag.codigo}`} className="d-block w-100"/>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src={`../${bag.img_cafe}`} alt={`Imagen del producto ${bag.codigo}`} className="d-block w-100"/>
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" style={{color:'black'}} aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img-small-wrap">
                                            <div className="item-gallery">
                                                <img src={`../${bag.img_blanco}`} alt={`Imagen del producto ${bag.nombre}`} />
                                            </div>
                                            <div className="item-gallery">
                                                <img src={`../${bag.img_negro}`}  alt={`Imagen del producto ${bag.nombre}`} />
                                            </div>
                                            <div className="item-gallery">
                                                <img src={`../${bag.img_cafe}`} alt={`Imagen del producto ${bag.nombre}`} />
                                            </div>
                                        </div>
                                    </article>
                                </aside>
                                <aside className="col-sm-6">
                                    <article className="card-body">
                                        <h3 className="title mb-3">{bag.nombre}</h3>

                                        <div className="mb-3">
                                        </div>
                                        <dl>
                                            
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-sm-3">Código</dt>
                                            <dd className="col-sm-9">{bag.codigo}</dd>

                                            <dt className="col-sm-3">Color</dt>
                                            <dd className="col-sm-9">Blanco, negro, kraft</dd>

                                        </dl>
                                        <div className="rating-wrap">

                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <dl className="dlist-inline">
                                                    <dt>Papel: </dt>
                                                    <dd>
                                                        <select className="form-control form-control-sm" style={{ width: '100px'}} id="DdlTipoPapel" name="DdlTipoPapel">
                                                            <option value="" disabled>Elige una opción</option>
                                                            <option value="1" selected>Tipo papel</option>
                                                            <option value="Kraft café">Kraft café</option>
                                                            <option value="Ledger Blanco">Ledger Blanco</option>
                                                            <option value="Cartulina">Cartulina</option>
                                                        </select>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <dl className="dlist-inline">
                                                    <dt>Impresión: </dt>
                                                    <dd>
                                                        <select className="form-control form-control-sm" style={{width: '100px'}} id="DdlImpresion" name="DdlImpresion">
                                                            <option value="" disabled>Elige una opción</option>
                                                            <option value="1" selected>Impresion</option>
                                                            <option value="1 tinta">1 tinta</option>
                                                            <option value="2 tintas">2 tintas</option>
                                                            <option value="Full Color">Full Color</option>
                                                        </select>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <dl className="dlist-inline">
                                                    <dt>Cantidad: </dt>
                                                    <dd>
                                                        <select className="form-control form-control-sm" style={{width: '100px'}} id="DdlCantidad" name="DdlImpresion">
                                                            <option value="1" disabled>Elige una opción</option>
                                                            <option value="100" selected>100</option>
                                                            <option value="500">500</option>
                                                            <option value="1000">1000</option>
                                                        </select>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </article>
                                </aside>
                            </div>
                        </main>
                        <article className="card mt-3">
                            <div className="card-body">
                                <h4>Información de contacto</h4>
                                <div className="container">
                                    <form className="p-5" data-toggle="validator" onSubmit={handleSubmit}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" id="nombre" name="nombre" className="form-control mb-4"
                                                        placeholder="Nombre" required 
                                                        value={nombre}
                                                        onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" id="empresa" name="empresa" className="form-control mb-4"
                                                        placeholder="Empresa" required 
                                                        value={empresa}
                                                        onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="email" id="correo" name="correo" className="form-control mb-4"
                                                        placeholder="Correo" required 
                                                        value={correo}
                                                        onChange={handleInputChange}/>
                                                </div>
                                                <div className="col">
                                                    <input type="text" id="telefono" name="telefono" className="form-control mb-4"
                                                        placeholder="Teléfono" required 
                                                        value={telefono}
                                                        onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <textarea className="form-control rounded-0" id="comentarios" name="comentarios"
                                                            rows="5" placeholder="Comentarios"
                                                            value={comentarios}
                                                            onChange={handleInputChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <button id="BtnCotizar" className="btn  btn-warning" type="submit"><i className="fa fa-envelope"></i>Enviar cotización</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>

        </>
    )
}
