import { margin, padding } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

function Item ({id, category, titulo, imagen, descripcion, precio}){
    return(
        <>
            <div className='d-flex flex-column col-sm-12 col-md-6 col-lg-3 align-items-center' style={{border:'solid 3px blue', margin: 0, padding: 20}}>
                <h2>{titulo}</h2>
                <img style={{width: 100, height: 100}} src={imagen}></img>
                <p>{descripcion}</p>
                <p>Precio: {precio}</p>
                <Link to={'/Item/' + id}><button>Detalles del juguete</button></Link>
            </div>
        </>
    );
};

export default Item;