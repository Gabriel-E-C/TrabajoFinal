import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const ubicacionDelItem = '../mockItem.json';
    const [loading, setLoading] = useState(true);
    const [detalleItem, setDetalleItem] = useState({});

    
    useEffect(() => {
        const getItem = (url) => {
            return fetch(url)
                .then((response) => response.json())
                //.then((data) => console.log (data))
                .catch(error => console.log("error"))
        };
    

        getItem (ubicacionDelItem)
            .then((resultado) => {
                console.log(resultado)
                setDetalleItem(resultado)
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <>
            <div>{loading && 'Loading...'}</div>
            <div>{!loading && <ItemDetail detalleItem={detalleItem} />}</div>
        </>
    )
};

export default ItemDetailContainer;