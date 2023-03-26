import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agrgarAlCarrito = (item) => {
    setCarrito([...carrito, item])
  }

  const isInCart = (id) => {
    return carrito.some((prod) => prod.id === id)
  }

  const Cantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }
    return (
        <CartContext.Provider value={{
            carrito,
            agrgarAlCarrito,
            isInCart,
            Cantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}