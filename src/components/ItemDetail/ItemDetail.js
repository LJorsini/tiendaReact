import {  Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../Context/CartContext"


export const ItemDetail = ({item}) => {

    const { agrgarAlCarrito, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agrgarAlCarrito(newItem)
        
        /* setCarrito( [...carrito, newItem] ) */
    }
    

    return (
        <div className=""> 
                    <img src={item.img} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>Precio: $ <strong>{item.price}</strong></p>

                    {/* <ItemCount 
                        max = {item.stock}
                        cantidad = {cantidad}
                        setCantidad = {setCantidad}
                        handleAgregar = {handleAgregar}
                    />  */}

                    {
                        isInCart(item.id) 
                            ? <Link to="/cart" className="btn btn-success">Finalizar Compra</Link>
                            : <ItemCount 
                            max = {item.stock}
                            cantidad = {cantidad}
                            setCantidad = {setCantidad}
                            handleAgregar = {handleAgregar}
                        /> 
                    }


                    <button onClick={handleVolver} className="btn btn-primary">VOLVER</button>
                    
        </div>
    )
}

