import '../css/CartWidget.css'

const CartWidget = (props) => {
    return (
        <div>
            <i className="fas fa-search"></i>
            <i className="fa fa-shopping-cart" ></i>
            {props.Icono}
        </div>
    )
}

export default CartWidget

