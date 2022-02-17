import React, { useEffect, useState} from 'react'
import ItemList from '../../Cart/jsx/ItemList'
import { getProductos } from '../../Cart/jsx/Productos'

const ItemListContainer = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
      getProductos
       .then((res) => {
          setData(res)
      })
      .catch((error) => {
          console.error(error)
      })
  }, [])
  console.log(getProductos)
    return (
        <>
          <h1> GARBO. {props.Greetings}</h1>  
          <ItemList elementos={getProductos} />
        </>
    )
}

export default ItemListContainer