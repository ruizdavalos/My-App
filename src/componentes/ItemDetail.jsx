
 import { useState } from "react"
//  import { useEffect } from "react"

export const ItemDetail = ( { listaProductos } ) => {

    // const [ detaill, setDetaill ] = useState( "")

    const products = (listaProductos)

    // <Item key={ producto.id} id={producto.id} name={ producto.name}  img={ producto.img } price={ producto.price } />
    //                     )

    if(products){
        return (
            <>
                <article className="cardDetailContainer">
                    <h3> {products.name} </h3>
                    <div className="img"> { products.img }</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, facilis at! Quam consectetur eum eveniet quia, neque repellat, fuga delectus tenetur suscipit consequatur blanditiis excepturi voluptate. Officia fuga culpa reiciendis.</p>
                    {/* <p>Precio :  { price }</p>
                    <button className="button">Comprar</button> */}
                </article>
            </>
        )
    }else{
        return <></>
    }

}