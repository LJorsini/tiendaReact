import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./components/Contacto/Contacto";
import { Micros } from "./components/Micros/Micros";
import { Memorias } from "./components/Memorias/Memorias";
import { Mothers } from "./components/Mothers/Mothers";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
/* import { Contador } from "./components/Contador/Contador"; */
import Contador from "./components/Contador/Contador";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "./components/Context/CartContext";
import { useState } from "react";






function App() {

  const [carrito, setCarrito] = useState([])

  console.log(carrito)

  return (
    <CartContext.Provider value={{
      carrito,
      setCarrito
    }}>

      <BrowserRouter>
        

        <Navbar/>

        <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/micros" element={<Micros/>}/>
            <Route path="/memorias" element={<Memorias/>}/>
            <Route path="/mothers" element={<Mothers/>}/>
            <Route path="/contacto" element={ <Contacto/>}/>
             
            
        </Routes>

        
        <Contador/>
      
      </BrowserRouter>

    </CartContext.Provider>
    
  );
}

export default App;
