import React, { useEffect } from 'react'
import Item from './Item';

function ItemList ({result}){
    return (
        <>
            {result.map ((item) => (
            <>
                <div className='flex-container'>
                    <div className='row'>
                        <Item titulo = {item.titulo} imagen = {item.imagen} descripcion = {item.descripcion} precio = {item.precio} />
                    </div>
                </div>
            </>
            ))}
        </>
    );
};

export default ItemList;