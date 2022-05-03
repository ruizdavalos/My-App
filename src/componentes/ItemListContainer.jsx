
import { ItemList } from "./ItemList"
import { useEffect, useState } from "react"

const baseDeDatos = [
    {
        id: 1,
        name: 'Sabana M&H',
        img: <img src="https://i.ibb.co/8YB9Mf1/jk-company.png" alt="jk-company" border="0" />,
        price: 999
    },
    {
        id: 2,
        name: 'Sabana Arte Blanco ',
        img: <img src="https://i.ibb.co/8YB9Mf1/jk-company.png" alt="jk-company" border="0" />,
        price: 1599
    }
]

//  fetch

export const ItemListContainer  = () => {

    const [ cargando , setCargando] = useState( true )
    const [ listaProductos , setListaProductos] = useState( )


    useEffect( () => {

        const pedido = new Promise( ( res ) => {
            res( baseDeDatos )
        })
        pedido.then( () => {
            setTimeout( () =>{
                console.log( ' Productos recibidos ')
                setListaProductos( baseDeDatos )
                setCargando( false )
            },2000)
        }).catch( ( err ) => {
            console.log( err)
        })
    }, [])

    if( cargando ) {
        return(
            <p> Cargando...</p>
        )
    }else{
        return (
            <ItemList listaProductos={ listaProductos }/>
        )
    }

}