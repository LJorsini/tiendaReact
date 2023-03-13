import { Link, useNavigate } from "react-router-dom"


export const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className=""> 
                    <img src={item.img} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>Precio: $ <strong>{item.price}</strong></p>

                    <button onClick={handleVolver} className="btn btn-primary">VOLVER</button>
                    
        </div>
    )
}

