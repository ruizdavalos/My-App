
import Footer from './componentes/Footer'
import Header from './componentes/Header'
// import { ItemList } from './componentes/itemList'
import { Main } from './componentes/Main'
import './styles.scss'

//  ARRANCAS EL PEDIDO
// const pedido = fetch( 'https://fakestoreapi.com/products' )


//  FETCH HELL
//   pedido.then( ( respuesta ) =>{
//     // recibes las respuestas
//     // respuesta.blob()
//     // respuesta.arrayBuffer()
//     const products =  respuesta.json()
//     console.log(products)
//     return products 
    
//     .then( ( products ) => {
//       console.log( products)
//     })
// }).catch()



const App = ()  => {



  return ( 
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App

//  bloque_elemento_modificador     => bend

