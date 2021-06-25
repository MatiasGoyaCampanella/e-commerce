import React from 'react'

function ItemDetailCointainerArray() {
    miPromesa.then(function(valor){
        setData(Database);
    }).catch((function(error){
    console.log(error);
    }));
} [];

return(
    <div>
        <div>
            {data !==null ? (
                <ItemDetailArray
                id={data.id}
                title={data.name}
                description={data.description}
                price={data.precio}
                stock={data.stock}
                img={data.thumbnaiUrl}/>
            ) : (
                <h3>
                    <Spinner animation="border" variant="info" />
                </h3>
            )}
        </div>
    </div>
)


export default ItemDetailContainerArray