import { maxWidth } from '@mui/system';
import React, { useEffect } from 'react'
import Item from './Item';

function ItemDetail ({detalleItem}){
    const {titulo, imagen, descripcion, precio} = detalleItem
    console.log(titulo)

    return (
        <>
            
            <div className="flex-container bg-success">
                <div className="row d-flex justify-content-center">
                    <div className="col-6 bg-warning ">
                        <div className="row">
                            <h2 style={{textAlign:"center"}}>{titulo}</h2>
                            <div className="d-flex align-items-center justify-content-center col-8 bg-secondary">
                                <img src={imagen} alt="Imagen de la figura de Boba Fett" style={{maxWidth:"80%", height:"80%"}} />
                            </div>
                            <div className="col-4 bg-primary">
                                <p>{descripcion}</p>
                                <h5>Pecio:</h5>
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