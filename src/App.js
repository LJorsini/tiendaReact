import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
/* import { FontAwesomeIcon } from "@"; */
/* import { Icons } from "./components/Icons/Icons"; */


function App() {
  return (
    <div>
      <Navbar/>

      <ItemListContainer nombre = "Micro Intel I7" precio = {120000}/>
      <ItemListContainer nombre = "Micro Intel I5" precio = {85000}/>
      
      
      
      
      </div>
    
  );
}

export default App;
