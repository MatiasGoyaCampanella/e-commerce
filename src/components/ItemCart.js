import React from 'react';
import Counter from './ItemCount';
import Delete from '../assets/delete.png';
import { useOrderDelete, useOrderChange } from '../components/CartContext';
import { useAlert } from 'react-alert';

function ItemCart(props) {
  const alert = useAlert();
  const deleteItem = useOrderDelete();
  const itemCounterChange = useOrderChange();
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col">
          <img className="img-fluid" src={props.thumb} alt="thumb" />
        </div>
        <div className="col">
          <div className="row text-muted">{props.category}</div>
          <div className="row">{props.title}</div>
        </div>
        <div className="col">
          <Counter
            className="col"
            counter={props.quantity}
            subItem={() => {
              itemCounterChange(props.quantity - 1, props.index);
              alert.success('Se quito un item');
            }}
            addItem={() => {
              itemCounterChange(props.quantity + 1, props.index);
              alert.success('Se agrego un item');
            }}
          />
        </div>
        <div className="col">
          <div className="row text-muted">$/U</div>
          <div className="row">$ {props.price}</div>
          <div className="row"></div>
        </div>
        <div className="col">
          <div className="row text-muted">Total</div>
          <div className="row">$ {props.price * props.quantity}</div>
          <div className="row"></div>
        </div>

        <div className="col-12">
          <button
            onClick={() => {
              deleteItem(props.index);
              alert.success('Se borro un producto');
            }}
          >
            <img src={Delete} alt="delete" style={{ height: '16px' }} />
          </button>
        </div>
        <div className="col">
          <div className="row"></div>{' '}
        </div>
      </div>
    </div>
  );
}

export default ItemCart;