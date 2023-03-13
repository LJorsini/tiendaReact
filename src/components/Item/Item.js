
import { Link } from "react-router-dom"


const Item = ( {item} ) => {
    return (
        <div>
                    
                    <img src={item.img} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>Precio: $ <strong>{item.price}</strong></p>
                    <Link to={`/detail/${item.id}`} className='btn btn-primary'>DETALLE</Link> 
                    
                    
        </div>
        )
    
}

export default Item