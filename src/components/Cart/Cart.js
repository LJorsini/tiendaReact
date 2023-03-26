import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


export const Cart = () => {

    const { carrito } = useContext(CartContext)

    return (
        <div>
            <h2>Compra</h2>
            <hr/>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h4></h4>
                        <img src={prod.img} alt={prod.name}/>
                        <p>Precio: {prod.price}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio Total: $ {prod.price * prod.cantidad}</p>
                    </div>
                ))
            }
        </div>
        
            
    )
}