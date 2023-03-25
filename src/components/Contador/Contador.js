import { useEffect, useState } from "react"

 const Contador = () => {

    const [counter, setCounter ] = useState(0);
    /* const [fecha, setFecha] = useState(); */
    console.log(counter)
    


    const handleClick = () => {
        setCounter(counter + 1);
        counter++
        console.log(counter)
        
    }

   

    return (
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Contador</button>
            <p>Clicks: {counter}</p>
            <p>Fecha y Hora: {new Date().toLocaleTimeString()}</p>

        </div>
    )
}

export default Contador