import React, { useEffect } from 'react'
import Item from './Item';

function ItemList ({result}){
    return (
        <>
            <div className='flex-container'>
                <div className='row'>
                    <div className='d-flex flex-wrap bg-success ' style={{border:'solid 3px black'}}>
                        {result.map ((item) => (
                        <>
                            <Item id = {item.id} category = {item.category} titulo = {item.titulo} imagen = {item.imagen} descripcion = {item.descripcion} precio = {item.precio} />
                        </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemList;