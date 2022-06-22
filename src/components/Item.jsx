import React from 'react'

function Item ({titulo, imagen, descripcion, precio}){
    return(
        <>
            <div>
                <h1>{titulo}</h1>
                <img style={{width: 100, height: 100}} src={imagen}></img>
                <p>{descripcion}</p>
                <p>Precio: {precio}</p>
                <button>Detalles del juguete</button>
            </div>
        </>
    );
};

export default Item;