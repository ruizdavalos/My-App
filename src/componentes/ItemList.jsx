
import { Item } from "./Item"

export const ItemList = ({ listaProductos }) => {

 console.log( listaProductos )

    return (
        <>
        <section className="cc">
            {listaProductos.map( ( producto ) =>{
                    return (
                        <Item key={ producto.id} id={producto.id} name={ producto.name}  img={ producto.img } price={ producto.price } />
                    )
            }) }
        </section>
        </>
    )
}

