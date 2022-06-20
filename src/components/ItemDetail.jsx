import React, { useEffect } from 'react'
import Item from './Item';

function ItemDetail ({elItem}){
    return (
        <>
            {elItem.map ((item) => (<Item titulo = {item.titulo} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio} />))}
        </>
    );
};

export default ItemDetail;