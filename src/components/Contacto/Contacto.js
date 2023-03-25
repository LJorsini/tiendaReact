import { useEffect } from "react"


export const Contacto = () => {

   useEffect (() => {

        const clickear = () => {
            console.log("click")
        }
        window.addEventListener('click', clickear)


        return () => {
            window.removeEventListener('click', clickear )
        }
   })

    return (
        <div>
            <h2>Contacto</h2>
        </div>
    )

}