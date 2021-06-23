import React from 'react';
import { useParams } from 'react-router';
import ItemListCategory from './ItemListCategory';

function ItemListCategoryContainer(props) {
    const { UserCategory } = useParams();
    const [data, setData] = useState(null)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${UserCategory}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
        }, 1500);
        
        return () => {
            clearTimeout(timeOut);
        };
    }, [props.onSelect]);
    console.log(data);
    return (
        <div>
            <h3>Categorias ID: {UserCategory} </h3>
            <ItemListCategory/>
        </div>
    );
}
export default ItemListCategoryContainer;