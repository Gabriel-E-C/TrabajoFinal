import React, { useState } from 'react'

function ItemCount ({stock, inicial, onAdd}) {
    
    const [x, setX] = useState(0);
    console.log('render')
    return(
        <>
            <div className = 'd-flex flex-column justfy-items-center align-items-center m-3' id='contenedorContador'>
                <button className='m-1' onClick={() => {
                    if ((x + 1) <= stock){
                        setX( x + 1);
                        console.log ({x});
                    }else{
                        alert('No se puede superar el stock.')
                    }
                }}>
                    +
                </button>
                <div className='m-1' id='numero'>
                    Numero: {x}
                </div>
                <button className='m-1' onClick={() => {
                    if ((x-1) >= inicial){
                        setX( x - 1);
                        console.log ({x});
                    }
                }}>
                    -
                </button>
                <br />
                <button onClick={() => {
                    if (stock != 0){
                        onAdd ()
                    } else {
                        alert ('Lo sentimos. No hay producto en stock.')
                    }
                }}> Terminar mi compra </button>
            </div>    
            
        </>
    )
}

export default ItemCount;