import './ItemListContainer.css';

export const ItemListContainer = (props) => {
    console.log(props);
    return (
        <div className = "contenedor__ItemList">
            <h2>Nombre : {props.nombre}</h2>
            <h2>Precio : $ {props.precio}</h2>

        </div>
    )
}