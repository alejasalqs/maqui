import React, { useState } from 'react'
import { succesAlert, warningAlert } from '../helpers/sweetAlert';
import { useForm } from '../hooks/useForm';


export const FormContacto = () => {

    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        correo: '',
        telefono: '',
        msj: '',
    });

    const { nombre, correo, telefono, msj } = formValues;

    
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(nombre, correo, telefono, msj);
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

        return true;
    }

    return (
        <>
           <form data-toggle="validator"
                 id="contactForm" 
                 name="sentMessage" 
                 noValidate="novalidate"
                 onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name" hidden>Nombre</label>
                                    <input className="form-control" id="nombre" name="nombre" type="text" placeholder="Nombre completo"
                                        required="required" data-validation-required-message="Please enter your name."
                                        aria-invalid="false" 
                                        value={nombre}
                                        onChange={handleInputChange}
                                        required/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" hidden>Correo Electrónico</label>
                                    <input className="form-control" id="correo" name="correo" type="email" placeholder="Correo Electrónico"
                                        required="required"
                                        data-validation-required-message="Please enter your email address."
                                        aria-invalid="false" 
                                        value={correo}
                                        onChange={handleInputChange}
                                        required/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" hidden>Teléfono</label> 
                                    <input className="form-control" name="telefono" id="telefono" type="tel" placeholder="Teléfono"
                                        required="required"
                                        data-validation-required-message="Please enter your phone number."
                                        aria-invalid="false" 
                                        value={telefono}
                                        onChange={handleInputChange}
                                        required/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="message" hidden>Mensaje</label>
                                    <textarea className="form-control" name="msj" id="msj" placeholder="Mensaje"
                                        required="required" data-validation-required-message="Please enter a message."
                                        aria-invalid="false"
                                        value={msj}
                                        onChange={handleInputChange}></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase"
                                     type="submit">
                                    Enviar Mensaje</button>
                            </div>
                        </div>
                    </form> 
        </>
    )
}
