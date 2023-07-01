const ShoppingCartReducer = ( globalState, action ) => {
  switch ( action.type ) {
    case "AGREGAR_PRODUCTO":
      const { product } = action.payload
      const productExists = globalState.products.find( item => item._id === product._id )
      if ( !productExists ) {
        globalState.products.push(
          {
            ...product,
            quantity: 1
          }
        )
      } else {
        const productIndex = globalState.products.findIndex( item => item._id === product._id )
        globalState.products[ productIndex ].quantity++
      }

      const productsUpdated = [ ...globalState.products ]
      localStorage.setItem( 'shoppingCart', JSON.stringify( productsUpdated ) )

      return {
        ...globalState,
        products: productsUpdated
      }

    case "QUITAR_PRODUCTO":
      const { productId } = action.payload
      const products = globalState.products.filter( product => product._id !== productId )
      localStorage.setItem( 'shoppingCart', JSON.stringify( products ) )
      return {
        ...globalState,
        products: products
      }

    case "OBTENER_PRODUCTOS":
      const productsFromStorage = localStorage.getItem( 'shoppingCart' )
      if ( !productsFromStorage ) {
        return {
          ...globalState,
          products: []
        }
      }
      const productsParsed = JSON.parse( productsFromStorage )
      return {
        ...globalState,
        products: productsParsed
      }

    default:
      return globalState
  }
}

export default ShoppingCartReducer