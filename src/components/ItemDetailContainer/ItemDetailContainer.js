import { useEffect, useState } from "react"
import { useParams, useSubmit } from "react-router-dom"
import { pedirProductoPorId } from "../../helpers/pedirdatos"
import { ItemDetail } from "../ItemDetail/ItemDetail" 
import { doc, getDoc }  from "firebase/firestore"
import { db } from "../../firebase/config"



 


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef) 
            .then((doc) => {
                console.log(doc)
                setItem( {
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))

        /* pedirProductoPorId(Number(itemId))
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            
            }) */
    }, [])

    return (
        <div className="container_itemDetail">
            {
                loading
                    ? <h2>Cargando</h2>
                    : <ItemDetail item={item}/>
            }

        </div>
    )
}