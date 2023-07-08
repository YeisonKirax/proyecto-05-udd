import { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import ShoppingCartContext from '../../contexts/ShoppingCart/ShoppingCartContext.jsx'

export const ShoppingCart = ( { showShoppingCart, handleCloseShoppingCart } ) => {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { products, getProducts, removeProduct } = shoppingCartCtx
  const [ total, setTotal ] = useState( 0 )
  useEffect( () => {
    if ( !products ) {
      getProducts()
    } else {
      setTotal( 0 )
      products.forEach( product => {
        const { price, quantity } = product
        setTotal( ( current ) => {
          return current + price * quantity
        } )
      } );
    }
  }, [ products ] )

  return (
    <Modal show={ showShoppingCart } onHide={ handleCloseShoppingCart }>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          products?.length === 0 ? "No hay productos en el carrito"
            : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Precio Unitario (USD)</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products?.map( ( product, index ) => {
                      return (
                        <tr key={ index }>
                          <td>{ index + 1 }</td>
                          <td>{ product.title }</td>
                          <td>{ product.price } </td>
                          <td>{ product.quantity }</td>
                          <td>
                            <Button type='button' onClick={ () => {
                              removeProduct( product._id )
                            } }>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
                            </Button>
                          </td>
                        </tr>
                      )
                    } )
                  }
                </tbody>
                <tfoot>
                  <tr >
                    <td>Total a pagar: ${ total } USD</td>
                  </tr>
                </tfoot>
              </Table>
            )
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type='button' onClick={ handleCloseShoppingCart }>
          Ir a pagar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}