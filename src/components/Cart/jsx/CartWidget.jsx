import { useState } from "react"
import '../css/CartWidget.css'

const CartWidget = (props) => {
    const[count, setCount] = useState(0) 

    const handleCount = () => {
        setCount(count+1)
    }

    return (
        <div>
            <i className="fas fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            {count}
            {props.Icono} 
        </div>
    )
}

export default CartWidget

