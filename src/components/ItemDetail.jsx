import React, { useEffect } from 'react'
import Item from './Item';

function ItemDetail ({detalleItem}){
    const {titulo, imagen, descripcion, precio} = detalleItem
    //{elItem.map ((item) => (<Item titulo = {item.titulo} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio} />))}
    console.log(titulo)

    return (
        <>
            <div className="flex container">
                <div className="row">
                    <div className="col-6 bg-warning">
                        <div className="row">
                            <h2>{titulo}</h2>
                            <div className="col-8 bg-secondary">
                                <img src={imagen} alt="" />
                            </div>
                            <div className="col-4 bg-primary">
                                <p>{descripcion}</p>
                                <p>{precio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;