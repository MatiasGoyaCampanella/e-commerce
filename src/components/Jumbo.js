
import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Jumbo(props) {
  return (
    <Jumbotron className=" rounded-3 border border-danger p-4 mb-4 shadow-lg">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>
        <Button variant="success" href="/about">
          {props.buttonText}
        </Button>
      </p>
    </Jumbotron>
  );
}

export default Jumbo;