import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer (){
    const { categoria } = useParams ();
    const ubicacionListaItems = '../mockItems.json'
    const [loading, setLoading] = useState (true);
    const [listaItems, setListaItems] = useState ([]);

    useEffect (() => {

        const getItemsList = (url) => {
            return fetch(url)
                .then((response) => response.json())
                .then((data) => data)
                .catch(error => console.log("error"))
        };

        const losItems = new Promise ((res, rej) =>{
            setTimeout (() => {
                res ( getItemsList (ubicacionListaItems)
                );
            }, 2000);
        });
    
        losItems
            .then ((resultado) => {
                setListaItems (categoria ? resultado.filter(lista => lista.category == categoria) : resultado);
            })
            .finally(() => {
                setLoading (false);
            })
    }, []);


    return (
    <>
        <div>{loading && 'Loading...'}</div>
        {console.log({listaItems})}
        <ItemList result = {listaItems} />
    </>
    )       
};

export default ItemListContainer;