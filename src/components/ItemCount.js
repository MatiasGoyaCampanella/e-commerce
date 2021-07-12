import React from 'react';
import { Button } from 'react-bootstrap';

function Counter(props) {
  return (
    <div className="d-flex justify-content-center m-4">
      <Button
        style={{ width: '4rem' }}
        variant="danger"
        onClick={props.subItem}
      >
        -
      </Button>
      <div className="m-3" style={{ width: '4rem' }}>
        {props.counter}
      </div>

      <Button
        style={{ width: '4rem' }}
        variant="success"
        onClick={props.addItem}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
