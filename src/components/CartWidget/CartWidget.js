import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { FaCartPlus } from 'react-icons/fa'

export const CartWidget = () => {

    const { Cantidad } = useContext(CartContext)

    return (
        <div style={{
            fontSize: '25px',
            marginRight: '20px'
        }}>
            <FaCartPlus/>
            <span>{Cantidad}</span>
        </div>
    )
}