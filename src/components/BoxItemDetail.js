import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import Counter from './ItemCount';
//import './BoxItemDetail.css';
import { useOrder, useOrderUpdate, useOrderChange } from './CartContext';

function BoxItemDetail(props) {
  const [counter, setCounter] = useState(0);
  const order = useOrder();
  const setOrder = useOrderUpdate();
  const updateOrder = useOrderChange();
  const alert = useAlert();
  function addOneItem() {
    return setCounter(counter + 1);
  }
  function subOneItem() {
    counter > 0
      ? setCounter(counter - 1)
      : console.log('tiene que ser mayor a 0');
  }

  function addItem(event) {
    event.preventDefault();
    const index = order.findIndex((element) => element.id === props.productId);
    if (index === -1) {
      setOrder(
        props.productId,
        props.title,
        counter,
        props.price,
        props.thumb,
        props.category,
      );
      alert.show(
        `Se a agredado al carrito:${props.title} con ${counter} unidades!`,
      );
    } else {
      const cantidad = order[index].quantity + counter;
      updateOrder(cantidad, index);

      alert.show(`Se sumaron ${counter} unidades a ${props.title}!`);
    }
    setCounter(0);
  }
  return (
    <main>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <a href="/notFound">
              <i className="fa fa-arrow-left"></i>
            </a>
          </div>
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{props.title}</h1>
              <p className="sub">{props.category}</p>
              <p className="price">$ {props.price}</p>
            </div>
            <div className="justify-content-center ">
              <img src={props.photo} alt="" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>{props.text}</p>
            </div>
            <span className="stock">
              <i className="fa fa-pen"></i> In stock
            </span>
            <div className="reviews">
              <ul className="stars">
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
              <span>({props.stock} Unidades)</span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="recommend">
            <Counter
              addItem={addOneItem}
              subItem={subOneItem}
              counter={counter}
            />
          </div>
          <div className="action">
            {counter > 0 ? (
              <button
                type="button"
                data-product-id={props.productId}
                onClick={addItem}
              >
                agregar al carrito
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg disabled"
                disabled
              >
                agregar al carrito
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BoxItemDetail;