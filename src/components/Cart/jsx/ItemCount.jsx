import { useState } from "react"
import '../css/ItemCount.css'

const ItemCount = () => {
    const min = 1 , max = 10
    const [count, setCount] = useState(0)
    
    const handleIncrement = () => {
        count < max ? setCount(prev => prev + 1) : Swal.fire(
            'Información!',
            'Stock máximo permitido',
            'warning'
        )
    }
    
    const handleDecrement = () => {
        count > min ? setCount(prev => prev - 1) :
            Swal.fire(
                'Información!',
                'Stock mínimo permitido',
                'warning'
            )
    }

    const msg = () => {
        Swal.fire(
            'Gracias por tu compra!'
        )
    }

    return (
        <div className='Cartdiv'>
            {count}
            <button onClick={handleDecrement}> - </button><button onClick={msg} className='btnCart'>Agregar al Carrito</button> <button onClick={handleIncrement}> + </button>
        </div>
    )
}

export default ItemCount
