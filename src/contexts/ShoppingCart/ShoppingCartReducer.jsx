import { useReducer } from 'react';

const SHOPPING_CART_LS_KEY = 'shoppingCart'

const shoppingCartReducer = ( globalState, action ) => {
  const { type, payload } = action
  switch ( type ) {
    case "AGREGAR_PRODUCTO":
      console.log( globalState.products );
      const { product } = payload
      let productsUpdated
      if ( globalState.products ) productsUpdated = [ ...globalState.products ]
      else productsUpdated = []
      const productIndex = productsUpdated.findIndex( item => item._id === product._id )
      if ( productIndex < 0 ) {
        productsUpdated.push( {
          ...product,
          quantity: 1
        } )
        localStorage.setItem( SHOPPING_CART_LS_KEY, JSON.stringify( productsUpdated ) )
        return {
          ...globalState,
          products: productsUpdated
        }
      }
      const oldProduct = { ...globalState.products[ productIndex ] }
      productsUpdated[ productIndex ] = { ...oldProduct, quantity: oldProduct.quantity + 1 }
      localStorage.setItem( SHOPPING_CART_LS_KEY, JSON.stringify( productsUpdated ) )
      return {
        ...globalState,
        products: productsUpdated
      }

    case "QUITAR_PRODUCTO":
      const { productId } = payload
      const productsFiltered = globalState.products.filter( product => product._id !== productId )
      localStorage.setItem( SHOPPING_CART_LS_KEY, JSON.stringify( productsFiltered ) )
      return {
        ...globalState,
        products: productsFiltered
      }

    case "OBTENER_PRODUCTS":
      const productsFromStorage = localStorage.getItem( SHOPPING_CART_LS_KEY )
      if ( !productsFromStorage ) {
        localStorage.setItem( SHOPPING_CART_LS_KEY, JSON.stringify( [] ) )
        return {
          ...globalState,
          products: []
        }
      }
      const productsParsed = JSON.parse( productsFromStorage ) // se transforma de un string a un array
      return {
        ...globalState,
        products: productsParsed
      }
    default:
      return globalState
  }
}

export function useShoppingCartReducer( initialState ) {
  return useReducer( shoppingCartReducer, initialState )
}