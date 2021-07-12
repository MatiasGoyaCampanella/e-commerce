import React from 'react';
import './SummaryOrder.css';
import ItemCart from './ItemCart.js';
import { useOrder } from '../components/CartContext';
function SummaryOrder() {
  const Order = useOrder();

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {Order.length} items
              </div>
            </div>
          </div>

          <div className="scrollV">
            {Order.map((item, index) => {
              return (
                <ItemCart
                  key={item.id}
                  thumb={item.thumb}
                  category={item.category}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  index={index}
                />
              );
            })}
          </div>
          <div className="back-to-shop">
            <a href="/">←</a>
            <span className="text-muted"></span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Resumen</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>
              {' '}
              Cantidad de Items
            </div>
            <div className="col text-right fs-3">
              {Order.reduce((acu, element) => acu + element.quantity, 0)}
            </div>
          </div>
          <form>
            <p>Envio</p>{' '}
            <select>
              <option className="text-muted">Standard-Delivery- €5.00</option>
            </select>
            <p>Cupon de Descuento</p>{' '}
            <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            style={{
              borderTop: '1px solid rgba(0,0,0,.1)',
              padding: '2vh 0',
            }}
          >
            <div className="col">TOTAL</div>
            <div className="col text-right">
              ${Order.reduce((a, b) => a + b.price * b.quantity, 0)}
            </div>
          </div>{' '}
          <button className="btn btn-dark">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default SummaryOrder;