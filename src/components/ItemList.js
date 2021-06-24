import React from 'react'

function ItemList() {
    const items =[{
        title:"perfume1",
        precio:30
        id:2,
        },{
            title:"perfume2",
            precio:30
            id:2,
        }
    ]
}

return (
    <div>
        {
            items.map((post, index)=> {
                return (
                    <div>
                        <Item image={image1} id={index} title={post.title} precio={post.precio}/>
                    </div>
                )
            })
        }
    </div>
)

export default ItemList