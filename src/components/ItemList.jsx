import React, { useEffect } from 'react'
import Item from './Item';

function ItemList ({result}){
    return (
        <>
            {result.map ((item) => (<Item titulo = {item.titulo} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio} />))}
        </>
    );
};

export default ItemList;