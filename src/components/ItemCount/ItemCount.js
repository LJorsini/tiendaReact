/* import { useState } from "react" */

export const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        
        cantidad >1 && setCantidad(cantidad - 1)
    }

   /*  const handleAgregar = () => {
        const itemToCart = {
            ...item, 
            cantidad
        }
        console.log(itemToCart);
    } */

    return (

        
        <div>
            <button onClick={handleRestar} className="btn btn-primary">-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br/>
            <button onClick={handleAgregar} className="btn btn-success">Agregar al carrito</button> 
        </div>
    )

}