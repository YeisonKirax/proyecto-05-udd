import { useContext, useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { PayPalButton } from '../../components/PayPalButton/PayPalButton.jsx'
import ShoppingCartContext from '../../contexts/ShoppingCart/ShoppingCartContext.jsx'

const PayPalCheckout = () => {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { products, removeProduct } = shoppingCartCtx
  const [ total, setTotal ] = useState( 0 )
  const [ showPayPal, setShowPayPal ] = useState( false )
  const [ successPayment, setSuccessPayment ] = useState( false )
  const [ orderId, setOrderId ] = useState( "" )
  useEffect( () => {

    setTotal( 0 )
    products.forEach( product => {
      const price = parseInt( product.price )
      setTotal( ( current ) => {
        return current + price * product.quantity
      } )
    } )

  }, [ products ] )

  return (
    <>
      <Container className="bg-white">
        <h1>Checkout</h1>
        {
          products?.length === 0 ? 'No hay productos'
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
                          <td>{ product.price }</td>
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
                        </tr> )
                    } )
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td>TOTAL: ${ total } USD</td>
                  </tr>
                </tfoot>
              </Table>
            )
        }
        <Container>
          <Button onClick={ () => setShowPayPal( !showPayPal ) } disabled={ showPayPal || products.length === 0 }>Pagar</Button>
        </Container>
        { showPayPal ? <PayPalButton currency={ "USD" } showSpinner={ false } products={ products } setSuccessPayment={ setSuccessPayment } setOrderId={ setOrderId }></PayPalButton> : null }
      </Container>
      <Container>
        { successPayment && showPayPal ? <h3>El pago se ha realizado correctamente con número de orden { orderId }</h3> : "El pago esta pendiente" }
      </Container>
    </>
  )
}

export default PayPalCheckout