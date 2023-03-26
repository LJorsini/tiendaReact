import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./components/Contacto/Contacto";
import { Micros } from "./components/Micros/Micros";
import { Memorias } from "./components/Memorias/Memorias";
import { Mothers } from "./components/Mothers/Mothers";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext, CartProvider } from "./components/Context/CartContext";
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";






function App() {


  return (
      <CartProvider>
        <BrowserRouter>
        

        <Navbar/>

        <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/micros" element={<Micros/>}/>
            <Route path="/memorias" element={<Memorias/>}/>
            <Route path="/mothers" element={<Mothers/>}/>
            <Route path="/contacto" element={ <Contacto/>}/>
             
            
        </Routes>

        
        
      
      </BrowserRouter>
      </CartProvider>

      
    
  );
}

export default App;
