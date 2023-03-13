import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirdatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



/* const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                resolve(MOCK_DATA)
            }, 5000)
        })
    } */

export const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(productos)

    const { categoryId } = useParams()
    console.log(categoryId)
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((response) => {
             if (!categoryId) {
                setProductos(response)
                setLoading(false)
             } else {
                setProductos(response.filter((prod) => prod.category === categoryId))
                
             }
            
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
        .finally (() => {
            setLoading(false)
        })

    }, [categoryId])

    
    return (
        <div className = "contenedor__ItemList">
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
            
            

        </div>
    )
}