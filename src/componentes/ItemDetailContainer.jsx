

import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"

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

export const ItemDetailContainer  = () => {

    const [ click , setClick] = useState( false )
    const [ listaProductos , setListaProductos] = useState( {})
    const [ cargando, setCargando ] = useState('')


    // useEffect( () => {

    //     const pedido = new Promise( ( res ) => {
    //         res( baseDeDatos )
    //     })
    //     pedido.then( () => {
    //         setTimeout( () =>{
    //             console.log( ' Productos recibidos ')
    //             setListaProductos( baseDeDatos )
    //             setCargando( false )
    //         },2000)
    //     }).catch( ( err ) => {
    //         console.log( err)
    //     })
    // }, [])


    const detalles = () => {
        setCargando( 'Cargando...')
        
        setTimeout( () => {
            setCargando('')
            setClick(true)
            setListaProductos(baseDeDatos[0])
        },2000)
    }


    if( !click) {
        return(
            <>
                <p> </p>
                <p>{cargando}</p>
                <button onClick={ detalles} >Detalles</button>
            </>
        )
    }else{
        return (
            <ItemDetail listaProductos={ listaProductos }/>
        )
    }

}