import React from 'react'
import {
  Link
} from "react-router-dom";


export const ProductoCard = ({ nombre, img_cafe, codigo }) => {
    return (
        <>
              <div className="col-lg-4 col-md-6 mb-4 fadeIn"> 
                            <div className="card h-100"> 
                                <Link to={`/producto/${codigo}`}>
                                    <img className="card-img-top" src={img_cafe} alt={`Imagen del producto ${nombre}`}/>
                                </Link> 
                                <div className="card-body"> 
                                    <h4 className="card-title"> 
                                        <Link to={`/producto/${codigo}`}>{ nombre }</Link> 
                                    </h4> 
                            <p className="card-text"> 
                            </p> 
                        </div> 
                        <div className="card-footer"> 
                            <Link type="button" className="btn btn-info" to={`/producto/${codigo}`}>Cotizar</Link> 
                        </div> 
                    </div>
                </div>
        </>
    )
}
