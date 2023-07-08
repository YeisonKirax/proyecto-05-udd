import { useReducer } from 'react'
import ShoppingCartContext from './ShoppingCartContext.jsx'
import ShoppingCartReducer from './ShoppingCartReducer.jsx'

const ShoppingCartState = ( props ) => {
  const initialState = {
    products: null
  }

  const [ globalState, dispatch ] = useReducer( ShoppingCartReducer, initialState )

  const addProduct = ( product ) => {
    dispatch( {
      type: 'AGREGAR_PRODUCTO',
      payload: {
        product
      }
    } )
  }

  const removeProduct = ( productId ) => {
    dispatch( {
      type: 'QUITAR_PRODUCTO',
      payload: {
        productId
      }
    } )
  }

  const getProducts = () => {
    dispatch( {
      type: 'OBTENER_PRODUCTOS',
    } )
  }

  return (
    <ShoppingCartContext.Provider value={ {
      ...globalState,
      addProduct,
      removeProduct,
      getProducts
    } }>

      { props.children }
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartState