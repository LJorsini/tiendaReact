import { useContext, useEffect, useState } from 'react';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirdatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';



/* const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                resolve(MOCK_DATA)
            }, 5000)
        })
    } */

export const ItemListContainer = () => {

    const contexto = useContext(CartContext)
    console.log(contexto)
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(productos)

    const { categoryId } = useParams()
    console.log(categoryId)
    
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
         

        getDocs(q)
        .then((res) => {
            const docs = res.docs.map((doc) => {

                return {...doc.data(), id: doc.id}

            })

            console.log(docs)
            setProductos(docs)
        })
        .finally(() => {
            setLoading(false)
        })




        /* pedirDatos()
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
        }) */

    }, [categoryId])

    
    return (
        <div className = "contenedor__ItemList container ">
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
            
            

        </div>
    )
}