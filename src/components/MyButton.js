import react from 'react';
export default function() {

    const carrito = [
        { id: "A-01", name:"Perfume LG", description: "Lorem", stock:6},
        { id: "A-02", name:"Perfume LG", description: "Lorem", stock:6},
        { id: "B-01", name:"Crema LG", description: "Lorem", stock:6},
        { id: "B-01", name:"Crema LG", description: "Lorem", stock:6},
        { id: "C-01", name:"Maquillaje LG", description: "Lorem", stock:6},
        { id: "C-01", name:"Maquillaje LG", description: "Lorem", stock:6},
        { id: "D-01", name:"otros LG", description: "Lorem", stock:6},
        { id: "D-01", name:"otros LG", description: "Lorem", stock:6}
    ];
    function getCartItems() {
        let miPromesa = new Promise ((resolve, reject) => {
            //Reject (Cuando no pudimos realizar la tarea o hibo un error)
            //con un numero aleatorio simulamos un error en la request

            //Simulamos una funcion "Asincrona" usando setTimeout
            setTimeout(function() {
                const error = Math.random() > 0.85;
                //resolve(se ejecuta cuando la tarea se cumple con exito)
                if(!error) {
                    resolve(carrito);
                }
                reject("Error obteniendo datos");

            }, 500);

        });
        miPromesa.then(function(resultado){
            console.log(resultado);
        }).catch(
            function(error) {
                console.log(error);
            }
        ).finally(
            function() {
                alert('Promesa terminada')
            }
        )

    }

    return (
        <div>
            <button onClick={getCartItems}>Ver mi Carrito</button>
        </div>
    )
}

