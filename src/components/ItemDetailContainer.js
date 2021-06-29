import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [value, setValue] = useState(null)
    useEffect(()=> {
        fetch('https://api.mercadolibre.com/items/$MLA600190449')
        .then((res)=>res.json())
        .then((res)=>{setValue(res.results)})
    },[])

    return(
        <div>
            {value !== null ? (value.map((val, index)=>{
                return <ItemDetail key={index} image={val.image} description={val.species} nombre={val.name}/>
            })): 
            
            <h1>Cargando página</h1>}

        </div>
    )
}
export default ItemDetailContainer