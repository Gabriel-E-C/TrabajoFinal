import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer (){
    const [loading, setLoading] = useState (true);
    const [listaItems, setListaItems] = useState ([]);

    useEffect (() => {
        const losItems = new Promise ((res, rej) =>{
            setTimeout (() => {
                res ([{
                        titulo: 'Boba Fett Action Figure',
                        imagen: '',
                        descripcion: 'Figura de accion vintage de Boba Fett, mercenario de Star Wars',
                        precio: '$5000'
                    },
                    {
                        titulo: 'Destro G.I. Joe Action Figure',
                        imagen: '',
                        descripcion: 'Figura de accion vintage de Destro, comandante de fuerzas del mal de G.I. Joe',
                        precio: '$4000'
                    },
                    {
                        titulo: 'Cobra G.I. Joe Action Figure',
                        imagen: '',
                        descripcion: 'Figura de accion vintage de Destro, general de fuerzas del mal de G.I. Joe',
                        precio: '$5500'
                    },
                    {
                        titulo: 'Snake Bite Action Figure',
                        imagen: '',
                        descripcion: 'Figura de accion vintage de Snake Bite, mercenario de las fuerzas del mal de Rambo',
                        precio: '$7800'
                    },
                ]);
            }, 2000);
        });
    
        losItems
            .then ((resultado) => {
                setListaItems (resultado);
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