import React from 'react'
import Item from './Item'


const ItemList = ({elementos}) => {
    return (
        <div>
            {elementos.map((producto) => (
                <Item key={producto.id} producto={producto} style={{backgraoung: 'blue'}}/>
            ))}
        </div>
    )
}

export default ItemList
