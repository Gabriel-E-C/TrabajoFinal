import { maxWidth } from '@mui/system';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail ({detalleItem}){
    const {titulo, imagen, descripcion, precio} = detalleItem
    const [agrego, setAgrego] = useState (0)

    function onAdd (itemCountVar){
            setAgrego (itemCountVar)
            console.log (itemCountVar)
    }

    return (
        <>
            
            <div className="flex-container p-3 bg-success">
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
                {(agrego != 0)? <div className="d-flex align-items-center justify-content-center m-4"> <Link to={'/Cart'}><button> Terminar mi compra </button></Link></div> : <ItemCount stock={0} inicial={5} onAdd={onAdd}/>}
            </div>            
        </>
    );
};

export default ItemDetail;