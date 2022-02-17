import React from 'react'
import { productos } from './Productos'

const Item = ({elementos}) => {
    console.log(elementos)
    return (
        <div>
            <h2>{elementos.title}</h2>
            <h2>{elementos.price}</h2>
            <h2>{elementos.stock}</h2>
            <img src={elementos.img} alt={elementos.title} />         
        </div>
    )
}

export default Item