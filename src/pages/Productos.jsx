import React,{ useEffect, useState }  from 'react'
import { ProductoCard } from '../components/ProductoCard'
import { getAllBags } from '../Data/db_helper';


export const Productos = () => {

    const [bags, setBags] = useState([]);

    useEffect(() => {
        
        getAllBags().then(resp => {
            console.log(resp);
            setBags(resp);
        });

    }, []);

    return (
        <>
            <div id="catalogoContainer" className="container">
                    <h2>Catálogo productos</h2>
                    <hr />
                    <div id="productos" className="row">
                        {
                            bags.map(bag => (
                                <ProductoCard {...bag} key={bag.codigo}/>
                            ))
                        }
                    </div>
            </div>
        </>
    )
}
