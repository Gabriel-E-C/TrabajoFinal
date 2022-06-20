import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemDetailContainer (){
    const ubicacionDelItem = '../mockItem.json';
    const [loading, setLoading] = useState (true);
    const [detalleItem, setDetalleItem] = useState ({});

    const getItem = (url)  =>{
        fetch (url)
        .then ((Response) => Response.json())
        .then ((data) => setDetalleItem(data.result))
        .catch (error =>console.log("error"))
    };
    
    useEffect (() => {
        const detalleDelItem = new Promise ((res, rej) =>{

            setTimeout (() => {
                res( getItem (ubicacionDelItem));
            }, 2000);
        });

    elItem
        .then ((resultado)=>{
            setDetalleItem (resultado)
        })
        .finally(() => {
            setLoading (false);
        })
    },[]);

    return (
    <>
        <div>{loading && 'Loading...'}</div>
        
        <ItemDetail detalleItem = {detalleItem} />
    </>
    )       
};

export default ItemDetailContainer;