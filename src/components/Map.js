import React from 'react'

function Map() {
    const post = [
        {
            title: "Perfumes",
            body: "marca",
            id: 1,
        },
        {
            title: "Cremas",
            body: "marca",
            id: 2,
        },

    ];
    return (

        <div>

            {

                post.map((post, index) => { 

                    return (<p id={index}>{post.title}</p>) 

            })

        }

        </div>

    )



}
export default Map