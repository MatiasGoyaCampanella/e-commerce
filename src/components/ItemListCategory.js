import { Card, Col, Button, Spinner } from "react-bootstrap";
import React, { useEffect, useState} from "react";
import $ from "jquery";
import Item from "./Item";

function ItemList(props) {
    const cart = [""];
    const stock = props.stock;
    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
           // fetch(`https://api.mercadolibre.com/sites`)
                 .then((res) => res.json())
                 .then((res) => {
                     setData(res.results);
                     console.log(res.results);
                 });
        }, 1500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [props.onSelect]);

        return (
            <div className="row row-cols-1 row-cols-md-3">
                {data !== null ? (
                    data.map((data,index) => {
                        return <Item key={data.id} id={data}/>
                    })
                ) : (
                    <h3 ClassName="text-center mt-5"></h3>

                  //  <Spinner animation="grow" variant=""/>
                
                )}
            </div>
        )
}