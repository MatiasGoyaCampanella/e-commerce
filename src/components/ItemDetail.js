import React, { useState, useEffect } from 'react';
import Counter from '../components/ItemCount';

function ItemDetail(props) {
  const [counter, setCounter] = useState(0);

  function addOneItem(event) {
    console.log(event);
    return setCounter(counter + 1);
  }
  function subOneItem(event) {
    console.log(event);
    counter > 0
      ? setCounter(counter - 1)
      : console.log('tiene que ser mayor a 0');
  }
  useEffect(() => {
    console.log('Change Counter State');
  });

  return (
    <main>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <a href="/notFound">
              <i className="fa fa-arrow-left"></i>
            </a>
          </div>
          <h3>Productos</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{props.location.state.title}</h1>
              <p className="sub"></p>
              <p className="price">$</p>
            </div>
            <div className="image">
              <img
                src=".jpg"
                alt=""
              />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>{props.location.state.text} </p>
            </div>
            <span className="stock">
              <i className="fa fa-pen"></i> En stock
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
              <span></span>
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
              <button type="button">Agregar al Carrito</button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg disabled"
                disabled
              >
                agregar algo
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetail;