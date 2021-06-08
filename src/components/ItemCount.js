import React from "react"

const Contador = () => {
    const [clicks , setClicks] = React.useState(0);
    function aumentarContador () {
        setClicks(clicks + 1);
    };
    return (
        <div> 
          <button onClick = {aumentarContador}>Contador</button> 
          <p>{`Clickeaste ${clicks} veces`}</p>
        </div>
    )


}
export default Contador