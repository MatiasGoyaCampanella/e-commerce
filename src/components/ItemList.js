import React, { useEffect, useState } from 'react';
//import './ItemList.css';
import { CardDeck, Spinner } from 'react-bootstrap';
import CardItem from './CardItem.js';
import { getFirestore } from '../firebase';

const ItemList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('no resultado');
        setData([]);
      } else {
        setData(querySnapshot.docs.map((doc) => doc.data()));
      }
    });
  }, []);

  return (
    <CardDeck className="d-flex justify-content-around">
      {data ? (
        data.map((item) => {
          return (
            <CardItem
              key={item.id}
              title={item.name}
              text={item.description}
              productId={item.id}
              price={item.price}
              stock={item.stock}
              photo={item.photo_url}
              thumb={item.thumb}
              category={item.category}
            />
          );
        })
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </CardDeck>
  );
};

export default ItemList;