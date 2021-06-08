import React from "react"

const Contador = () => {
    const [clicks , setClicks] = React.useState(0);
    function aumentarContador () {
        setClicks(clicks + 1);
        const stock = 10
        /*if(clicks(10)) {
            
            <p>{`Superaste el limete 10 de stock`}</p>
        }*/
    };
    return (
        <div> 
          <button onClick = {aumentarContador}>Contador</button> 
          <p>{`Clickeaste ${clicks} veces`}</p>
          <small>{new Date().toLocaleString()}</small>
        </div>
    )

}
export default Contador