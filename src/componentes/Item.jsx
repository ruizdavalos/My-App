



export const Item = ( {id, name, img, price } ) => {


    if (id){
        return (

            <>
                <article className="cardProductContainer">
                    <h3> {name} </h3>
                    <div className="img"> { img }</div>
                    <p>Precio :  { price }</p>
                    <button className="button"  >Detalle</button>
                </article>
            </>
        )
    }else {
        return(
            <>
            </>
        )
    }
}